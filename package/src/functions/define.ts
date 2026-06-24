import type { OxlintConfig } from "oxlint";

import type { Preset, PresetResult } from "#/@types/preset";

import { clone } from "es-toolkit";

import { CONFIG_DEFAULT } from "#/constants/default";
import { mergePresetConfig, mergeUserConfig } from "#/functions/merge";

const defineConfigFn = (
    userConfig?: OxlintConfig,
    presets?: Preset[],
): OxlintConfig => {
    let config: OxlintConfig = mergeUserConfig(
        clone(CONFIG_DEFAULT),
        userConfig,
    );

    if (!presets) return config;

    for (const preset of presets) {
        const presetResult: PresetResult = preset({
            config,
        });

        config = mergePresetConfig(config, presetResult.config);
    }

    return config;
};

/**
 * Define Oxlint configuration.
 *
 * ### Example
 *
 * ```ts
 * import { defineConfig } from "@apst/oxlint";
 * import { commonPreset } from "@apst/oxlint/presets/common";
 * import { reactPreset } from "@apst/oxlint/presets/react";
 *
 * export default defineConfig([
 *     commonPreset(),
 *     reactPreset(),
 * ]);
 * ```
 */
function defineConfig(presets?: Preset[]): OxlintConfig;

/**
 * Define Oxlint configuration.
 *
 * All arrays will not be merged, adding new values will replace existing values.
 *
 * ### Example
 *
 * ```ts
 * import { defineConfig } from "@apst/oxlint";
 * import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
 * import { commonPreset } from "@apst/oxlint/presets/common";
 * import { reactPreset } from "@apst/oxlint/presets/react";
 *
 * export default defineConfig({
 *     ignorePatterns: [
 *         ...IGNORE_PATTERNS_DEFAULT,
 *         // ...
 *     ],
 * }, [
 *     commonPreset(),
 *     reactPreset(),
 * ]);
 * ```
 */
function defineConfig(config?: OxlintConfig, presets?: Preset[]): OxlintConfig;

function defineConfig(
    presetsOrConfig?: Preset[] | OxlintConfig,
    optionalPresets?: Preset[],
): OxlintConfig {
    const config: OxlintConfig | undefined = Array.isArray(presetsOrConfig)
        ? void 0
        : presetsOrConfig;

    const presets: Preset[] | undefined = Array.isArray(presetsOrConfig)
        ? presetsOrConfig
        : optionalPresets;

    return defineConfigFn(config, presets);
}

export { defineConfig };
