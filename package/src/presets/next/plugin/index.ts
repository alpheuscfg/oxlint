import type { LintPlugins } from "#/@types/oxlint";

import { PLUGIN_REACT } from "#/presets/react/plugin";

const PLUGIN_NEXT = [
    ...PLUGIN_REACT,
    "nextjs",
] as const satisfies LintPlugins;

export { PLUGIN_NEXT };
