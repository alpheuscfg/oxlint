import { createConfig, withConfig } from "@apst/oxlint";
import { describe, expect, it } from "vitest";

describe("withConfig", () => {
    it("returns the default config when no overrides are provided", () => {
        expect(withConfig()).toEqual(createConfig());
    });

    it("applies configOptions before merging overrides", () => {
        const config = withConfig({
            configOptions: {
                typed: true,
                plugins: {
                    next: true,
                    vitest: true,
                },
            },
        });

        expect(config).toEqual(
            createConfig({
                typed: true,
                plugins: {
                    next: true,
                    vitest: true,
                },
            }),
        );
    });

    it("replaces arrays instead of merging them", () => {
        const config = withConfig({
            configOptions: {
                plugins: {
                    react: true,
                },
            },
            ignorePatterns: [
                "custom/**",
            ],
            plugins: [
                "eslint",
            ],
            rules: {
                "no-console": "warn",
                "react/jsx-key": [
                    "warn",
                    {
                        checkFragmentShorthand: false,
                    },
                ],
            },
        });

        expect(config.ignorePatterns).toEqual([
            "custom/**",
        ]);
        expect(config.plugins).toEqual([
            "eslint",
        ]);
        if (typeof config.rules !== "object") {
            expect(config.rules).toBeDefined();
        } else {
            expect(config.rules["no-console"]).toBe("warn");
            expect(config.rules["react/rules-of-hooks"]).toBe("error");
            expect(config.rules["react/jsx-key"]).toEqual([
                "warn",
                {
                    checkFragmentShorthand: false,
                },
            ]);
        }
    });
});
