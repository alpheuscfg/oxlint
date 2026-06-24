import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import { nodePreset, PLUGIN_NODE, RULES_NODE } from "@apst/oxlint/presets/node";
import { describe, expect, it } from "vitest";

describe("node preset test", (): void => {
    it("should apply the node plugins and rules via the presets-only overload", (): void => {
        const config: OxlintConfig = defineConfig([
            nodePreset(),
        ]);

        expect(config.plugins).toEqual([
            ...PLUGIN_NODE,
        ]);

        expect(config.rules).toEqual({
            ...RULES_NODE,
        });
    });

    it("should preserve the user rules alongside the preset rules", (): void => {
        const config: OxlintConfig = defineConfig(
            {
                rules: {
                    "no-console": "warn",
                },
            },
            [
                nodePreset(),
            ],
        );

        expect(config.rules).toEqual({
            "no-console": "warn",
            ...RULES_NODE,
        });

        expect(config.ignorePatterns).toEqual(IGNORE_PATTERNS_DEFAULT);
    });
});
