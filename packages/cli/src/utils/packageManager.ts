import LRUCache from "lru-cache";
import semver from "semver";
import request from "./request";
import { execa } from "execa";
import { cwd } from "../const";
import { PackageManagerBin, PackageManagerRegistry } from "../enum";
import { hasProjectYarn, hasProjectPnpm } from "./env";

interface Option {
  context?: string;
  bin?: PackageManagerBin;
}

const metadataCache = new LRUCache({
  max: 200,
  ttl: 1000 * 60 * 30, // 30 min.
});

/**
 * NPM PACKAGE MANAGER
 */
export default class PackageManager {
  public readonly context: string;
  public readonly bin: PackageManagerBin;

  constructor({ bin, context }: Option = {}) {
    this.context = context || cwd;

    if (bin) {
      this.bin = bin;
    } else {
      if (hasProjectPnpm(this.context)) {
        this.bin = PackageManagerBin.Pnpm;
      } else if (hasProjectYarn(this.context)) {
        this.bin = PackageManagerBin.Yarn;
      } else {
        this.bin = PackageManagerBin.Npm;
      }
    }
  }

  async install() {
    await execa(this.bin, ["install", "--loglevel", "error"], {
      cwd,
      stdio: "inherit",
    });
  }

  /**
   * Yarn:     https://registry.yarnpkg.com
   * Pnpm/Npm: https://registry.npmjs.org/
   * TaoBao:   https://registry.npmmirror.com
   */
  async getRegistry() {
    let registry: string = PackageManagerRegistry.TaoBao;

    try {
      registry = (await execa(this.bin, ["config", "get", "registry"])).stdout;
    } catch {}

    return registry.replace(/\/$/g, "");
  }

  // https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md
  async getMetadata(name: string, full = false) {
    const registry = await this.getRegistry();

    const url = `${registry}/${name}`;
    const metadataCacheKey = `${this.bin}:${url}`;
    let metadata = metadataCache.get<Record<string, any>>(metadataCacheKey);
    if (metadata) return metadata;

    try {
      metadata = await request.get(url, {
        headers: {
          Accept: full
            ? ""
            : "application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*",
        },
      });

      if (metadata?.error) {
        throw new Error(metadata?.error);
      }
      metadataCache.set(metadataCacheKey, metadata);

      return metadata;
    } catch (error) {
      throw error;
    }
  }

  async getRemoteVersion(
    name: string,
    versionRange: string = "latest"
  ): Promise<string | undefined> {
    const metadata = await this.getMetadata(name);

    if (metadata) {
      if (Object.keys(metadata["dist-tags"]).includes(versionRange)) {
        return metadata["dist-tags"][versionRange];
      }

      const versions = Array.isArray(metadata.versions)
        ? metadata.versions
        : Object.keys(metadata.versions);

      return semver.maxSatisfying(versions, versionRange);
    }
  }
}
