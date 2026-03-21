import type { OxlintConfig } from "oxlint";

import type { CreateConfigOptions } from "#/@types/create";

import { IGNORE_PATTERNS_DEFAULT } from "#/consts/ignore-patterns";
import {
    PLUGINS_DEFAULT,
    PLUGINS_NEXT,
    PLUGINS_NODE,
    PLUGINS_REACT,
    PLUGINS_VITEST,
} from "#/consts/plugins";
import { RULES_ESLINT } from "#/consts/rules/eslint";
import { RULES_IMPORT } from "#/consts/rules/import";
import { RULES_NODE } from "#/consts/rules/node";
import { RULES_OXC } from "#/consts/rules/oxc";
import { RULES_REACT } from "#/consts/rules/react";
import { RULES_TYPESCRIPT } from "#/consts/rules/typescript";
import { RULES_UNICORN } from "#/consts/rules/unicorn";

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
    const hvTyped: boolean = options?.typed ?? false;
    const hvNode: boolean = options?.plugins?.node ?? false;
    const hvReact: boolean =
        options?.plugins?.next ?? options?.plugins?.react ?? false;
    const hvNext: boolean = options?.plugins?.next ?? false;
    const hvVitest: boolean = options?.plugins?.vitest ?? false;

    return {
        ignorePatterns: IGNORE_PATTERNS_DEFAULT,
        ...(hvTyped && {
            options: {
                typeAware: true,
                typeCheck: true,
            },
        }),
        plugins: [
            ...PLUGINS_DEFAULT,
            ...(hvNode ? PLUGINS_NODE : []),
            ...(hvReact ? PLUGINS_REACT : []),
            ...(hvNext ? PLUGINS_NEXT : []),
            ...(hvVitest ? PLUGINS_VITEST : []),
        ],
        rules: {
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...(hvNode ? RULES_NODE : {}),
            ...(hvReact ? RULES_REACT : {}),
        },
    };
};

export { createConfig };
