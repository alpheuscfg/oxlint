import type { OxlintConfig } from "oxlint";

type LintPlugins = Required<Required<OxlintConfig>["plugins"]>;

const PLUGINS_DEFAULT = [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "jsdoc",
] as const satisfies LintPlugins;

const PLUGINS_NODE = [
    "node",
    "promise",
] as const satisfies LintPlugins;

const PLUGINS_REACT = [
    "react",
    "react-perf",
    "jsx-a11y",
] as const satisfies LintPlugins;

const PLUGINS_NEXT = [
    "nextjs",
] as const satisfies LintPlugins;

const PLUGINS_VITEST = [
    "vitest",
] as const satisfies LintPlugins;

export type { LintPlugins };
export {
    PLUGINS_DEFAULT,
    PLUGINS_NEXT,
    PLUGINS_NODE,
    PLUGINS_REACT,
    PLUGINS_VITEST,
};
