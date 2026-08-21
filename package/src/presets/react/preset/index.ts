import type { Preset, PresetResult } from "#/@types/preset";

import { PLUGIN_REACT } from "#/presets/react/plugin";
import { RULES_REACT } from "#/presets/react/rules/react";
import { RULES_REACT_DEBUG } from "#/presets/react/rules/react-debug";

type CompleteReactPresetOptions = {
    debug: boolean;
};

type ReactPresetOptions = Partial<CompleteReactPresetOptions>;

const reactPreset = (options?: ReactPresetOptions): Preset => {
    return (): PresetResult => {
        return {
            config: {
                plugins: [
                    ...PLUGIN_REACT,
                ],
                rules: {
                    ...RULES_REACT,
                    ...(options?.debug === true ? RULES_REACT_DEBUG : {}),
                },
            },
        };
    };
};

export type { CompleteReactPresetOptions, ReactPresetOptions };
export { reactPreset };
