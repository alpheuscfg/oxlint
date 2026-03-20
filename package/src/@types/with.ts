import type { OxlintConfig } from "oxlint";

import type { CreateConfigOptions } from "#/@types/create";

/**
 * Options for the `withConfig` function.
 */
type WithConfigOptions = OxlintConfig & {
    configOptions?: CreateConfigOptions;
};

export type { WithConfigOptions };
