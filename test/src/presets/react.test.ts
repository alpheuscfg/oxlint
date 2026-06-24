import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import {
    PLUGIN_REACT,
    RULES_REACT,
    reactPreset,
} from "@apst/oxlint/presets/react";
import { describe, expect, it } from "vitest";

describe("react preset test", (): void => {
    it("should apply the react plugins and rules via the presets-only overload", (): void => {
        const config: OxlintConfig = defineConfig([
            reactPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_REACT,
        ]);

        expect(config.rules).toEqual({
            ...RULES_REACT,
        });
    });

    it("should preserve the user rules alongside the preset rules", (): void => {
        const config: OxlintConfig = defineConfig(
            {
                rules: {
                    "no-console": "warn",
                },
            },
            [
                reactPreset(),
            ],
        );

        expect(config.rules).toEqual({
            "no-console": "warn",
            ...RULES_REACT,
        });

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });
});
