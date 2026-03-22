import type { LintPlugins } from "#/@types/oxlint";

const PLUGIN_NODE = [
    "node",
] as const satisfies LintPlugins;

export { PLUGIN_NODE };
