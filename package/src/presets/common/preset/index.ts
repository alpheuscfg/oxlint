import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

import { PLUGIN_COMMON, PLUGIN_JS_COMMON } from "#/presets/common/plugin";
import { RULES_ESLINT } from "#/presets/common/rules/eslint";
import { RULES_IMPORT } from "#/presets/common/rules/import";
import { RULES_OXC } from "#/presets/common/rules/oxc";
import { RULES_PROMISE } from "#/presets/common/rules/promise";
import { RULES_STYLISTIC } from "#/presets/common/rules/stylistic";
import { RULES_TYPESCRIPT } from "#/presets/common/rules/typescript";
import { RULES_UNICORN } from "#/presets/common/rules/unicorn";

const commonPreset = (): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const config: OxlintConfig = toMerged(internalConfig, {
            plugins: [
                ...PLUGIN_COMMON,
            ],
            jsPlugins: [
                ...PLUGIN_JS_COMMON,
            ],
            rules: {
                // Plugins
                ...RULES_ESLINT,
                ...RULES_TYPESCRIPT,
                ...RULES_UNICORN,
                ...RULES_OXC,
                ...RULES_IMPORT,
                ...RULES_PROMISE,
                // JavaScript plugins
                ...RULES_STYLISTIC,
            },
        } satisfies OxlintConfig);

        return {
            config,
        };
    };
};

export { commonPreset };
