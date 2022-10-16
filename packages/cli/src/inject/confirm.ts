import type { InjectArgs } from "./types";

import { prompt } from "enquirer";
import { ProjectType } from "../enum";

// confirm: project type
export async function confirmProjectType() {
  const { type } = await prompt<{ type: ProjectType }>([
    {
      type: "select",
      name: "type",
      message: "Project type of the current operation",
      initial: 0,
      choices: [
        {
          name: ProjectType.Lib,
          message: "General library (Node/Browser)",
          value: ProjectType.Lib,
        },
        {
          name: ProjectType.Vue,
          message: "A project built with Vue.js",
          value: ProjectType.Vue,
        },
        {
          name: ProjectType.React,
          message: "A project built with React.js",
          value: ProjectType.React,
        },
      ],
    },
  ]);

  return type;
}

export type ComposableElements = Partial<Omit<InjectArgs, "composable">> & {
  eslintConfig?: boolean;
};

// confirm: composable config elements
export async function confirmComposableElements() {
  const result: ComposableElements = {};

  const { elements } = await prompt<{
    elements: [keyof Omit<InjectArgs, "composable" | "type"> | "eslintConfig"];
  }>([
    {
      type: "multiselect",
      name: "elements",
      message:
        "Select the configuration elements that need to be injected for the project",
      choices: [
        {
          name: "eslintConfig",
          message: "ESLint configuration file",
        },
        {
          name: "gitCommitLog",
          message: "Git commit log inspection script",
        },
        {
          name: "gitStaged",
          message:
            "Format the files in the Git staging area before committing the repository",
        },
        {
          name: "inspectTsType",
          message: "TS code type inspect",
        },
      ],
    },
  ]);

  elements.forEach((k) => (result[k] = true));

  if (result.eslintConfig) {
    const type = await confirmProjectType();
    result.type = type;
  }

  return result;
}
