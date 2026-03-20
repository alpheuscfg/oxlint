import type { OxlintConfig } from "oxlint";
import type { Format, Omit, Partial } from "ts-vista";

type CompleteConfigPluginsOptions = {
    /**
     * Whether to enable node plugins.
     */
    node: boolean;
    /**
     * Whether to enable react plugins.
     */
    react: boolean;
    /**
     * Whether to enable nextjs plugins.
     *
     * All react plugins will be included in addition to the nextjs plugins.
     */
    next: boolean;
    /**
     * Whether to enable vitest plugins.
     */
    vitest: boolean;
};

type ConfigPluginsOptions = Format<Partial<CompleteConfigPluginsOptions>>;

type CompleteConfigOptions = {
    /**
     * Whether to enable type checking.
     */
    typed: boolean;
    /**
     * Plugins to enable.
     */
    plugins: CompleteConfigPluginsOptions;
};

type ConfigOptions = Format<
    Partial<Omit<CompleteConfigOptions, "plugins">> &
        Partial<{
            /**
             * Plugins to enable.
             */
            plugins: ConfigPluginsOptions;
        }>
>;

type CreateConfigOptions = OxlintConfig & {
    /**
     * Configuration options.
     */
    configOptions?: ConfigOptions;
};

export type {
    CompleteConfigOptions,
    CompleteConfigPluginsOptions,
    ConfigOptions,
    ConfigPluginsOptions,
    CreateConfigOptions,
};
