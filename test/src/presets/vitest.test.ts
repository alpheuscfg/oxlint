import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import {
    PLUGIN_VITEST,
    RULES_VITEST,
    vitestPreset,
} from "@apst/oxlint/presets/vitest";
import { describe, expect, it } from "vitest";

describe("vitest preset test", (): void => {
    it("should apply the vitest plugins and rules via the presets-only overload", (): void => {
        const config: OxlintConfig = defineConfig([
            vitestPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_VITEST,
        ]);

        expect(config.rules).toEqual({
            ...RULES_VITEST,
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
                vitestPreset(),
            ],
        );

        expect(config.rules).toEqual({
            "no-console": "warn",
            ...RULES_VITEST,
        });

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });
});
