import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { mergePresetConfig } from "#/functions/merge";
import { PLUGIN_REACT } from "#/presets/react/plugin";
import { RULES_REACT } from "#/presets/react/rules/react";

const reactPreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = mergePresetConfig(internalConfig, {
            plugins: [
                ...PLUGIN_REACT,
            ],
            rules: {
                ...RULES_REACT,
            },
        } satisfies OxlintConfig);

        return {
            config,
        };
    };
};

export { reactPreset };
