import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import {
    commonPreset,
    PLUGIN_COMMON,
    RULES_ESLINT,
    RULES_IMPORT,
    RULES_OXC,
    RULES_PROMISE,
    RULES_TYPESCRIPT,
    RULES_UNICORN,
} from "@apst/oxlint/presets/common";
import { describe, expect, it } from "vitest";

describe("common preset test", (): void => {
    it("should support the presets-only overload", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_PROMISE,
        });
    });

    it("should apply presets after merging the user config", (): void => {
        const config: OxlintConfig = defineConfig(
            {
                ignorePatterns: [
                    "custom/**",
                ],
                rules: {
                    "no-console": "warn",
                },
            },
            [
                commonPreset(),
            ],
        );

        expect(config.ignorePatterns).toEqual([
            "custom/**",
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
        ]);

        expect(config.rules).toEqual({
            "no-console": "warn",
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_PROMISE,
        });
    });

    it("should preserve the default ignore patterns when only the preset is applied", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
        ]);

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });
});
