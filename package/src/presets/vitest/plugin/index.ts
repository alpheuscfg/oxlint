import type { LintPlugins } from "#/@types/oxlint";

const PLUGIN_VITEST = [
    "vitest",
] as const satisfies LintPlugins;

export { PLUGIN_VITEST };
