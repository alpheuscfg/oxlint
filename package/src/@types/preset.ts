import type { OxlintConfig } from "oxlint";

/**
 * Preset context.
 */
type PresetContext = {
    /**
     * Oxlint configuration.
     */
    config: OxlintConfig;
};

/**
 * Preset result.
 */
type PresetResult = {
    config: OxlintConfig;
};

/**
 * Preset for the Oxlint configuration.
 */
type Preset = (context: PresetContext) => PresetResult;

export type { Preset, PresetContext, PresetResult };
