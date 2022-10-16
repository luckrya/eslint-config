export default function extractPackageScope(name: string) {
  const scopedNameRegExp = /^(@[^/]+)\/.*$/;
  const result = name.match(scopedNameRegExp);

  return result ? result[1] : undefined;
}
