import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

import { PLUGIN_JSX } from "#/presets/jsx/plugin";
import { RULES_JSX_A11Y } from "#/presets/jsx/rules/jsx-a11y";

const jsxPreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = toMerged(internalConfig, {
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
