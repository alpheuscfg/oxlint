import type { OxlintConfig } from "oxlint";

import type { CreateConfigOptions } from "#/@types/options";

import { mergeWith } from "es-toolkit";

import { IGNORE_PATTERNS_DEFAULT } from "#/consts/ignore-patterns";
import {
    PLUGINS_DEFAULT,
    PLUGINS_NEXT,
    PLUGINS_NODE,
    PLUGINS_REACT,
    PLUGINS_VITEST,
} from "#/consts/plugins";

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
 *
 * ### Example
 *
 * An example for frontend project:
 *
 * ```ts
 * import { createConfig } from "@apst/oxlint";
 *
 * export default createConfig({
 *     configOptions: {
 *         typed: true,
 *         plugins: {
 *             react: true,
 *             vitest: true,
 *         },
 *     },
 * });
 * ```
 *
 * An example for backend project:
 *
 * ```ts
 * import { createConfig } from "@apst/oxlint";
 *
 * export default createConfig({
 *     configOptions: {
 *         typed: true,
 *         plugins: {
 *             node: true,
 *             vitest: true,
 *         },
 *     },
 * });
 * ```
 */
const createConfig = (config?: CreateConfigOptions): OxlintConfig => {
    const { configOptions, ...cfg } = config || {};

    const configDefault: OxlintConfig = {
        ignorePatterns: IGNORE_PATTERNS_DEFAULT,
        ...(configOptions?.typed && {
            options: {
                typeAware: true,
                typeCheck: true,
            },
        }),
        plugins: [
            ...PLUGINS_DEFAULT,
            ...(configOptions?.plugins?.node ? PLUGINS_NODE : []),
            ...(configOptions?.plugins?.react ? PLUGINS_REACT : []),
            ...(configOptions?.plugins?.next ? PLUGINS_NEXT : []),
            ...(configOptions?.plugins?.vitest ? PLUGINS_VITEST : []),
        ],
    };

    return mergeConfig(configDefault, cfg);
};

export { createConfig };
