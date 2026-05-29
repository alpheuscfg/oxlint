import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import {
    commonPreset,
    PLUGIN_COMMON,
    RULES_ESLINT,
    RULES_IMPORT,
    RULES_OXC,
    RULES_PROMISE,
    RULES_STYLISTIC,
    RULES_TYPESCRIPT,
    RULES_UNICORN,
} from "@apst/oxlint/presets/common";
import { describe, expect, it } from "vitest";

describe("defineConfig with presets test", (): void => {
    it("should supports the presets-only overload", (): void => {
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
            ...RULES_STYLISTIC,
        });
    });

    it("should applies presets after merging the user config", (): void => {
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
            ...RULES_STYLISTIC,
        });
    });
});
