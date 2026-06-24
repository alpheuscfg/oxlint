import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { mergePresetConfig } from "#/functions/merge";
import { PLUGIN_COMMON } from "#/presets/common/plugin";
import { RULES_ESLINT } from "#/presets/common/rules/eslint";
import { RULES_IMPORT } from "#/presets/common/rules/import";
import { RULES_OXC } from "#/presets/common/rules/oxc";
import { RULES_PROMISE } from "#/presets/common/rules/promise";
import { RULES_TYPESCRIPT } from "#/presets/common/rules/typescript";
import { RULES_UNICORN } from "#/presets/common/rules/unicorn";

const commonPreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = mergePresetConfig(internalConfig, {
            plugins: [
                ...PLUGIN_COMMON,
            ],
            rules: {
                ...RULES_ESLINT,
                ...RULES_TYPESCRIPT,
                ...RULES_UNICORN,
                ...RULES_OXC,
                ...RULES_IMPORT,
                ...RULES_PROMISE,
            },
        } satisfies OxlintConfig);

        return {
            config,
        };
    };
};

export { commonPreset };
