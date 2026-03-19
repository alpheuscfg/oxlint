import type { OxlintConfig } from "oxlint";

type LintPlugins = Required<Required<OxlintConfig>["plugins"]>;

const PLUGINS_DEFAULT = [
    "eslint",
    "typescript",
    "unicorn",
    "react",
    "react-perf",
    "nextjs",
    "oxc",
    "import",
    "jsdoc",
    "jsx-a11y",
    "node",
    "promise",
    "vitest",
] as const satisfies LintPlugins;

export type { LintPlugins };
export { PLUGINS_DEFAULT };
