import type { LintPlugins } from "#/@types/oxlint";

import { PLUGIN_JSX } from "#/presets/jsx/plugin";

const PLUGIN_REACT = [
    ...PLUGIN_JSX,
    "react",
    "react-perf",
] as const satisfies LintPlugins;

export { PLUGIN_REACT };
