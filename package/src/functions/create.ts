import type { OxlintConfig } from "oxlint";

import type { CreateConfigOptions } from "#/@types/options";

import { IGNORE_PATTERNS_DEFAULT } from "#/consts/ignore-patterns";
import {
    PLUGINS_DEFAULT,
    PLUGINS_NEXT,
    PLUGINS_NODE,
    PLUGINS_REACT,
    PLUGINS_VITEST,
} from "#/consts/plugins";

/**
 * Create an Oxlint configuration.
 *
 * ### Example
 *
 * An example for frontend project:
 *
 * ```ts
 * import { createConfig } from "@apst/oxlint";
 *
 * export default createConfig({
 *     typed: true,
 *     plugins: {
 *         react: true,
 *         vitest: true,
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
 *     typed: true,
 *     plugins: {
 *         node: true,
 *         vitest: true,
 *     },
 * });
 * ```
 */
const createConfig = (options?: CreateConfigOptions): OxlintConfig => {
    return {
        ignorePatterns: IGNORE_PATTERNS_DEFAULT,
        ...(options?.typed && {
            options: {
                typeAware: true,
                typeCheck: true,
            },
        }),
        plugins: [
            ...PLUGINS_DEFAULT,
            ...(options?.plugins?.node ? PLUGINS_NODE : []),
            ...(options?.plugins?.react ? PLUGINS_REACT : []),
            ...(options?.plugins?.next ? PLUGINS_NEXT : []),
            ...(options?.plugins?.vitest ? PLUGINS_VITEST : []),
        ],
    };
};

export { createConfig };
