import type { Preset, PresetResult } from "#/@types/preset";

import { PLUGIN_COMMON } from "#/presets/common/plugin";
import { RULES_ESLINT } from "#/presets/common/rules/eslint";
import { RULES_IMPORT } from "#/presets/common/rules/import";
import { RULES_OXC } from "#/presets/common/rules/oxc";
import { RULES_PROMISE } from "#/presets/common/rules/promise";
import { RULES_TYPESCRIPT } from "#/presets/common/rules/typescript";
import { RULES_UNICORN } from "#/presets/common/rules/unicorn";

const commonPreset = (): Preset => {
    return (): PresetResult => {
        return {
            config: {
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
            },
        };
    };
};

export { commonPreset };
