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
    PLUGIN_REACT,
    RULES_REACT,
    reactPreset,
} from "@apst/oxlint/presets/react";
import { PLUGIN_VUE, RULES_VUE, vuePreset } from "@apst/oxlint/presets/vue";
import { describe, expect, it } from "vitest";

describe("react preset combinations test", (): void => {
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

    it("should compose the frontend stack: common + jsx + vue", (): void => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            vuePreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_COMMON,
            ...PLUGIN_JSX,
            ...PLUGIN_VUE,
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
        });
    });
});
