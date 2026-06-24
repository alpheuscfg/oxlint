import type { Preset, PresetResult } from "#/@types/preset";

import { PLUGIN_NEXT } from "#/presets/next/plugin";
import { RULES_NEXTJS } from "#/presets/next/rules/nextjs";

const nextPreset = (): Preset => {
    return (): PresetResult => {
        return {
            config: {
                plugins: [
                    ...PLUGIN_NEXT,
                ],
                rules: {
                    ...RULES_NEXTJS,
                },
            },
        };
    };
};

export { nextPreset };
