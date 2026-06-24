import type { Preset, PresetResult } from "#/@types/preset";

import { PLUGIN_JSX } from "#/presets/jsx/plugin";
import { RULES_JSX_A11Y } from "#/presets/jsx/rules/jsx-a11y";

const jsxPreset = (): Preset => {
    return (): PresetResult => {
        return {
            config: {
                plugins: [
                    ...PLUGIN_JSX,
                ],
                rules: {
                    ...RULES_JSX_A11Y,
                },
            },
        };
    };
};

export { jsxPreset };
