import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import { describe, expect, it } from "vitest";

describe("ignore patterns test", (): void => {
    it("should return the default ignore patterns when no arguments are provided", (): void => {
        const config: OxlintConfig = defineConfig();

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });

    it("should replace the default ignore patterns with an empty array", (): void => {
        const config: OxlintConfig = defineConfig({
            ignorePatterns: [],
        });

        expect(config.ignorePatterns).toEqual([]);
    });

    it("should replace the default ignore patterns when overrides are provided", (): void => {
        const config: OxlintConfig = defineConfig({
            ignorePatterns: [
                "custom/**",
            ],
        });

        expect(config.ignorePatterns).toEqual([
            "custom/**",
        ]);
    });

    it("should extend the default ignore patterns with extra patterns", (): void => {
        const config: OxlintConfig = defineConfig({
            ignorePatterns: [
                ...IGNORE_PATTERNS_DEFAULT,
                "extra/**",
            ],
        });

        expect(config.ignorePatterns).toEqual([
            ...IGNORE_PATTERNS_DEFAULT,
            "extra/**",
        ]);
    });
});
