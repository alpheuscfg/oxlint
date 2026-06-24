import type { Preset, PresetResult } from "#/@types/preset";

import { PLUGIN_VITEST } from "#/presets/vitest/plugin";
import { RULES_VITEST } from "#/presets/vitest/rules/vitest";

const vitestPreset = (): Preset => {
    return (): PresetResult => {
        return {
            config: {
                plugins: [
                    ...PLUGIN_VITEST,
                ],
                rules: {
                    ...RULES_VITEST,
                },
            },
        };
    };
};

export { vitestPreset };
