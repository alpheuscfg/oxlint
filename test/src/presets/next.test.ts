import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import {
    nextPreset,
    PLUGIN_NEXT,
    RULES_NEXTJS,
} from "@apst/oxlint/presets/next";
import { describe, expect, it } from "vitest";

describe("next preset test", (): void => {
    it("should apply the next plugins and rules via the presets-only overload", (): void => {
        const config: OxlintConfig = defineConfig([
            nextPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_NEXT,
        ]);

        expect(config.rules).toEqual(RULES_NEXTJS);
    });

    it("should preserve the user rules alongside the preset rules", (): void => {
        const config: OxlintConfig = defineConfig(
            {
                rules: {
                    "no-console": "warn",
                },
            },
            [
                nextPreset(),
            ],
        );

        expect(config.rules).toEqual({
            "no-console": "warn",
            ...RULES_NEXTJS,
        });

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });
});
