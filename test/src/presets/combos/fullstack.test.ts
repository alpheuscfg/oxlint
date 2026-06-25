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
import { PLUGIN_VUE, RULES_VUE, vuePreset } from "@apst/oxlint/presets/vue";
import { describe, expect, it } from "vitest";

describe("fullstack preset combinations test", (): void => {
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

    it("should compose the fullstack stack: common + jsx + vue + node", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            vuePreset(),
            nodePreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_JSX,
            ...PLUGIN_VUE,
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
            ...RULES_VUE,
            ...RULES_NODE,
        });
    });

    it("should compose the fullstack stack with the vitest add-on: common + jsx + react + node + vitest", (): void => {
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

    it("should compose the fullstack stack with the vitest add-on: common + jsx + vue + node + vitest", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            vuePreset(),
            nodePreset(),
            vitestPreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_JSX,
            ...PLUGIN_VUE,
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
            ...RULES_VUE,
            ...RULES_NODE,
            ...RULES_VITEST,
        });
    });
});
