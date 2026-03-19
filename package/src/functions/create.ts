import type { OxlintConfig } from "oxlint";

import { mergeWith } from "es-toolkit";

import { IGNORE_PATTERNS_DEFAULT } from "#/consts/ignore-patterns";
import { PLUGINS_DEFAULT } from "#/consts/plugins";

const mergeConfig = (
    configDefault: OxlintConfig,
    config?: OxlintConfig,
): OxlintConfig => {
    if (!config) return configDefault;

    return mergeWith(
        configDefault,
        config,
        // array replacement
        (_: unknown, target: unknown): unknown => {
            if (Array.isArray(target)) return target;
            return void 0;
        },
    );
};

/**
 * Create an Oxlint configuration.
 *
 * All arrays will not be merged, adding new values will replace existing values.
 *
 * For extending the existing arrays, consider import them from `@apst/oxlint/consts`.
 */
const createConfig = (config?: OxlintConfig): OxlintConfig => {
    const configDefault: OxlintConfig = {
        ignorePatterns: IGNORE_PATTERNS_DEFAULT,
        options: {
            typeAware: true,
            typeCheck: true,
        },
        plugins: PLUGINS_DEFAULT,
    };

    return mergeConfig(configDefault, config);
};

export { createConfig };
