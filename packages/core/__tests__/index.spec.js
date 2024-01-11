const eslint = require("eslint");
const baseConfig = require("../index");

describe("Validate ESLint configs of @rc5/eslint-config-core", () => {
  const linter = new eslint.ESLint({
    baseConfig,
    useEslintrc: false,
    ignore: true,
    fix: false,
  });

  test("Should lint successfully", async () => {
    const results = await linter.lintFiles([`__tests__/fixtures/*`]);
    expect(results.map((i) => i.messages).flat().length).toBe(37);
  });

  test("There should be a specific error", async () => {
    const code = "export const foo = 1;\ndebugger;\n";
    const [lintResult] = await linter.lintText(code);
    expect(lintResult.errorCount).toBe(1);
  });
});
