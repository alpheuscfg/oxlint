import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

const jsxPreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = toMerged(internalConfig, {
            plugins: [],
            rules: {},
        } satisfies OxlintConfig);

        return {
            config,
        };
    };
};

export { jsxPreset };
