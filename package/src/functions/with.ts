import type { OxlintConfig } from "oxlint";

import { mergeWith } from "es-toolkit";

import { createConfig } from "#/functions/create";

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
 * Create an extendable Oxlint configuration.
 *
 * All arrays will not be merged, adding new values will replace existing values.
 *
 * For extending the existing arrays, consider importing them from `@apst/oxlint/consts`.
 *
 * ### Example
 *
 * ```ts
 * import { withConfig } from "@apst/oxlint";
 *
 * export default withConfig({
 *     rules: {
 *         "no-console": "warn",
 *     },
 * });
 * ```
 */
const withConfig = (config?: OxlintConfig): OxlintConfig => {
    return mergeConfig(createConfig(), config);
};

export { withConfig };
