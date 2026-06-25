import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import { PLUGIN_VUE, RULES_VUE, vuePreset } from "@apst/oxlint/presets/vue";
import { describe, expect, it } from "vitest";

describe("vue preset test", (): void => {
    it("should apply the vue plugins and rules via the presets-only overload", (): void => {
        const config: OxlintConfig = defineConfig([
            vuePreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_VUE,
        ]);

        expect(config.rules).toEqual({
            ...RULES_VUE,
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
                vuePreset(),
            ],
        );

        expect(config.rules).toEqual({
            "no-console": "warn",
            ...RULES_VUE,
        });

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });
});
