import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { mergePresetConfig } from "#/functions/merge";
import { PLUGIN_JSX } from "#/presets/jsx/plugin";
import { RULES_JSX_A11Y } from "#/presets/jsx/rules/jsx-a11y";

const jsxPreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = mergePresetConfig(internalConfig, {
            plugins: [
                ...PLUGIN_JSX,
            ],
            rules: {
                ...RULES_JSX_A11Y,
            },
        } satisfies OxlintConfig);

        return {
            config,
        };
    };
};

export { jsxPreset };
