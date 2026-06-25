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
import {
    PLUGIN_REACT,
    RULES_REACT,
    reactPreset,
} from "@apst/oxlint/presets/react";
import { describe, expect, it } from "vitest";

describe("next preset combinations test", (): void => {
    it("should compose the frontend stack with the next add-on: common + jsx + react + next", (): void => {
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
});
