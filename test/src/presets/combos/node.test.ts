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
import { nodePreset, PLUGIN_NODE, RULES_NODE } from "@apst/oxlint/presets/node";
import {
    PLUGIN_VITEST,
    RULES_VITEST,
    vitestPreset,
} from "@apst/oxlint/presets/vitest";
import { describe, expect, it } from "vitest";

describe("node preset combinations test", (): void => {
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
});
