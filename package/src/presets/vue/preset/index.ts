import type { Preset, PresetResult } from "#/@types/preset";

import { PLUGIN_VUE } from "#/presets/vue/plugin";
import { RULES_VUE } from "#/presets/vue/rules/vue";

const vuePreset = (): Preset => {
    return (): PresetResult => {
        return {
            config: {
                plugins: [
                    ...PLUGIN_VUE,
                ],
                rules: {
                    ...RULES_VUE,
                },
            },
        };
    };
};

export { vuePreset };
