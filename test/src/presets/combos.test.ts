import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
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
import {
    jsxPreset,
    PLUGIN_JSX,
    RULES_JSX_A11Y,
} from "@apst/oxlint/presets/jsx";
import {
    nextPreset,
    PLUGIN_NEXT,
    RULES_NEXTJS,
} from "@apst/oxlint/presets/next";
import { nodePreset, PLUGIN_NODE, RULES_NODE } from "@apst/oxlint/presets/node";
import {
    PLUGIN_REACT,
    RULES_REACT,
    reactPreset,
} from "@apst/oxlint/presets/react";
import {
    PLUGIN_VITEST,
    RULES_VITEST,
    vitestPreset,
} from "@apst/oxlint/presets/vitest";
import { describe, expect, it } from "vitest";

describe("preset combinations test", (): void => {
    it("should compose the frontend stack: common + jsx + react", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            reactPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_JSX,
            ...PLUGIN_REACT,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_PROMISE,
            ...RULES_JSX_A11Y,
            ...RULES_REACT,
        });
    });

    it("should compose the backend stack: common + node", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            nodePreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_NODE,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_PROMISE,
            ...RULES_NODE,
        });
    });

    it("should compose the fullstack stack: common + jsx + react + node", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            reactPreset(),
            nodePreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_JSX,
            ...PLUGIN_REACT,
            ...PLUGIN_NODE,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_PROMISE,
            ...RULES_JSX_A11Y,
            ...RULES_REACT,
            ...RULES_NODE,
        });
    });

    it("should compose the frontend stack with the next add-on", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            reactPreset(),
            nextPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_JSX,
            ...PLUGIN_REACT,
            ...PLUGIN_NEXT,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_PROMISE,
            ...RULES_JSX_A11Y,
            ...RULES_REACT,
            ...RULES_NEXTJS,
        });
    });

    it("should compose the backend stack with the vitest add-on", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            nodePreset(),
            vitestPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_NODE,
            ...PLUGIN_VITEST,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_PROMISE,
            ...RULES_NODE,
            ...RULES_VITEST,
        });
    });

    it("should compose the fullstack stack with the vitest add-on", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            reactPreset(),
            nodePreset(),
            vitestPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_JSX,
            ...PLUGIN_REACT,
            ...PLUGIN_NODE,
            ...PLUGIN_VITEST,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_PROMISE,
            ...RULES_JSX_A11Y,
            ...RULES_REACT,
            ...RULES_NODE,
            ...RULES_VITEST,
        });
    });

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
