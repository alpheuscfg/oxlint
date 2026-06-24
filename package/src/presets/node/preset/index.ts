import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { mergePresetConfig } from "#/functions/merge";
import { PLUGIN_NODE } from "#/presets/node/plugin";
import { RULES_NODE } from "#/presets/node/rules/node";

const nodePreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = mergePresetConfig(internalConfig, {
            plugins: [
                ...PLUGIN_NODE,
            ],
            rules: {
                ...RULES_NODE,
            },
        } satisfies OxlintConfig);

        return {
            config,
        };
    };
};

export { nodePreset };
