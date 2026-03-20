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
     */
    next: boolean;
    /**
     * Whether to enable vitest plugins.
     */
    vitest: boolean;
};

type ConfigPluginsOptions = Format<Partial<CompleteConfigPluginsOptions>>;

type CompleteCreateConfigOptions = {
    /**
     * Whether to enable type checking.
     */
    typed: boolean;
    /**
     * Plugins to enable.
     */
    plugins: CompleteConfigPluginsOptions;
};

/**
 * Options for creating an Oxlint configuration.
 */
type CreateConfigOptions = Format<
    Partial<Omit<CompleteCreateConfigOptions, "plugins">> &
        Partial<{
            /**
             * Plugins to enable.
             */
            plugins: ConfigPluginsOptions;
        }>
>;

export type {
    CompleteConfigPluginsOptions,
    CompleteCreateConfigOptions,
    ConfigPluginsOptions,
    CreateConfigOptions,
};
