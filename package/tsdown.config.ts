import { defineConfig } from "@apst/tsdown";
import { cjsPreset, dtsPreset, esmPreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            // entry
            index: "./src/index.ts",
            // constants
            "constants/default": "./src/constants/default.ts",
            "constants/ignore-patterns": "./src/constants/ignore-patterns.ts",
            // presets
            "presets/common/index": "./src/presets/common/index.ts",
            "presets/node/index": "./src/presets/node/index.ts",
            "presets/jsx/index": "./src/presets/jsx/index.ts",
            "presets/react/index": "./src/presets/react/index.ts",
            "presets/next/index": "./src/presets/next/index.ts",
            "presets/vitest/index": "./src/presets/vitest/index.ts",
        },
        platform: "node",
        unbundle: true,
    },
    [
        esmPreset(),
        cjsPreset(),
        dtsPreset(),
    ],
);
