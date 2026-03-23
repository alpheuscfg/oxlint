import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

import { PLUGIN_NEXT } from "#/presets/next/plugin";
import { RULES_NEXTJS } from "#/presets/next/rules/nextjs";

const nextPreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = toMerged(internalConfig, {
            plugins: [
                ...PLUGIN_NEXT,
            ],
            rules: {
                ...RULES_NEXTJS,
            },
        } satisfies OxlintConfig);

        return {
            config,
        };
    };
};

export { nextPreset };
