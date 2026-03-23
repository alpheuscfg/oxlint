import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

import { PLUGIN_VITEST } from "#/presets/vitest/plugin";
import { RULES_VITEST } from "#/presets/vitest/rules/vitest";

const vitestPreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = toMerged(internalConfig, {
            plugins: [
                ...PLUGIN_VITEST,
            ],
            rules: {
                ...RULES_VITEST,
            },
        } satisfies OxlintConfig);

        return {
            config,
        };
    };
};

export { vitestPreset };
