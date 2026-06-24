import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import {
    jsxPreset,
    PLUGIN_JSX,
    RULES_JSX_A11Y,
} from "@apst/oxlint/presets/jsx";
import { describe, expect, it } from "vitest";

describe("jsx preset test", (): void => {
    it("should apply the jsx plugins and rules via the presets-only overload", (): void => {
        const config: OxlintConfig = defineConfig([
            jsxPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_JSX,
        ]);

        expect(config.rules).toEqual({
            ...RULES_JSX_A11Y,
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
                jsxPreset(),
            ],
        );

        expect(config.rules).toEqual({
            "no-console": "warn",
            ...RULES_JSX_A11Y,
        });

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });
});
