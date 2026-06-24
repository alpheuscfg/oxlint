import type { Preset, PresetResult } from "#/@types/preset";

import { PLUGIN_REACT } from "#/presets/react/plugin";
import { RULES_REACT } from "#/presets/react/rules/react";

const reactPreset = (): Preset => {
    return (): PresetResult => {
        return {
            config: {
                plugins: [
                    ...PLUGIN_REACT,
                ],
                rules: {
                    ...RULES_REACT,
                },
            },
        };
    };
};

export { reactPreset };
