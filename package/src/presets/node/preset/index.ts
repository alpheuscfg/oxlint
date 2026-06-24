import type { Preset, PresetResult } from "#/@types/preset";

import { PLUGIN_NODE } from "#/presets/node/plugin";
import { RULES_NODE } from "#/presets/node/rules/node";

const nodePreset = (): Preset => {
    return (): PresetResult => {
        return {
            config: {
                plugins: [
                    ...PLUGIN_NODE,
                ],
                rules: {
                    ...RULES_NODE,
                },
            },
        };
    };
};

export { nodePreset };
