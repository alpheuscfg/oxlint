import type { OxlintConfig } from "oxlint";

import { IGNORE_PATTERNS_DEFAULT } from "#/constants/ignore-patterns";

/**
 * Default config for `oxlint`.
 */
const CONFIG_DEFAULT = {
    ignorePatterns: IGNORE_PATTERNS_DEFAULT,
} as const satisfies OxlintConfig;

export { CONFIG_DEFAULT };
