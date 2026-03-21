import type { OxlintConfig } from "oxlint";

import { createConfig } from "@apst/oxlint";
import {
    IGNORE_PATTERNS_DEFAULT,
    PLUGINS_DEFAULT,
    PLUGINS_NEXT,
    PLUGINS_NODE,
    PLUGINS_REACT,
    PLUGINS_VITEST,
    RULES_ESLINT,
    RULES_IMPORT,
    RULES_NODE,
    RULES_OXC,
    RULES_REACT,
    RULES_TYPESCRIPT,
    RULES_UNICORN,
} from "@apst/oxlint/consts";
import { describe, expect, it } from "vitest";

describe("createConfig test", (): void => {
    it("should creates the base config by default", (): void => {
        const config: OxlintConfig = createConfig();

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
        
        expect(config).not.toHaveProperty("options");

        expect(config.plugins).toEqual(PLUGINS_DEFAULT);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
        });
    });

    it("should enables type-aware options when typed is true", (): void => {
        const config: OxlintConfig = createConfig({
            typed: true,
        });

        expect(config.options).toEqual({
            typeAware: true,
            typeCheck: true,
        });
    });

    it("should adds node plugins and rules when requested", (): void => {
        const config: OxlintConfig = createConfig({
            plugins: {
                node: true,
            },
        });

        expect(config.plugins).toEqual([
            ...PLUGINS_DEFAULT,
            ...PLUGINS_NODE,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_NODE,
        });
    });

    it("should treats next as a superset of react and supports vitest", (): void => {
        const config: OxlintConfig = createConfig({
            plugins: {
                next: true,
                vitest: true,
            },
        });

        expect(config.plugins).toEqual([
            ...PLUGINS_DEFAULT,
            ...PLUGINS_REACT,
            ...PLUGINS_NEXT,
            ...PLUGINS_VITEST,
        ]);

        expect(config.rules).toEqual({
            ...RULES_ESLINT,
            ...RULES_TYPESCRIPT,
            ...RULES_UNICORN,
            ...RULES_OXC,
            ...RULES_IMPORT,
            ...RULES_REACT,
        });
    });
});
