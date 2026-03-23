import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { CONFIG_DEFAULT } from "@apst/oxlint/constants/default";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import { describe, expect, it } from "vitest";

describe("defineConfig test", (): void => {
    it("should returns the default config when no arguments are provided", (): void => {
        const config: OxlintConfig = defineConfig();

        expect(config).toEqual(CONFIG_DEFAULT);
        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });

    it("should merges object properties into the default config", (): void => {
        const config: OxlintConfig = defineConfig({
            rules: {
                "no-console": "warn",
            },
        });

        expect(config).toEqual({
            ignorePatterns: IGNORE_PATTERNS_DEFAULT,
            rules: {
                "no-console": "warn",
            },
        });
    });

    it("should replaces default arrays when overrides are provided", (): void => {
        const config: OxlintConfig = defineConfig({
            ignorePatterns: [
                "custom/**",
            ],
        });

        expect(config).toEqual({
            ignorePatterns: [
                "custom/**",
            ],
        });
    });

    it("should not affect later calls after overriding a previous config", (): void => {
        const previousConfig: OxlintConfig = {
            ignorePatterns: [
                "custom/**",
            ],
        };

        defineConfig(previousConfig);

        const config: OxlintConfig = defineConfig();

        expect(config).toEqual(CONFIG_DEFAULT);
    });
});
