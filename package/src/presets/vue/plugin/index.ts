import type { LintPlugins } from "#/@types/oxlint";

const PLUGIN_VUE = [
    "vue",
] as const satisfies LintPlugins;

export { PLUGIN_VUE };
