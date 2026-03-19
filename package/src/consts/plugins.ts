import type { OxlintConfig } from "oxlint";

type LintPluginOptionsSchemas = Required<Required<OxlintConfig>["plugins"]>;

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
] as const satisfies LintPluginOptionsSchemas;

export type { LintPluginOptionsSchemas };
export { PLUGINS_DEFAULT };
