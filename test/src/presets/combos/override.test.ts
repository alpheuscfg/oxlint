import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { commonPreset } from "@apst/oxlint/presets/common";
import { describe, expect, it } from "vitest";

describe("preset override combinations test", (): void => {
    it("should let a preset override a user rule for the same key", (): void => {
        const config: OxlintConfig = defineConfig(
            {
                rules: {
                    eqeqeq: "warn",
                },
            },
            [
                commonPreset(),
            ],
        );

        expect(config.rules?.eqeqeq).toEqual([
            "error",
            "always",
        ]);
    });

    it("should let a later preset override an earlier preset rule for the same key", (): void => {
        const customPreset = (): (() => {
            config: OxlintConfig;
        }) => {
            return (): {
                config: OxlintConfig;
            } => {
                return {
                    config: {
                        rules: {
                            eqeqeq: "off",
                        },
                    },
                };
            };
        };

        const config: OxlintConfig = defineConfig([
            commonPreset(),
            customPreset(),
        ]);

        expect(config.rules?.eqeqeq).toBe("off");
    });
});
