import type { OxlintConfig } from "oxlint";

import { defineConfig } from "@apst/oxlint";
import { commonPreset } from "@apst/oxlint/presets/common";
import { jsxPreset } from "@apst/oxlint/presets/jsx";
import { nextPreset } from "@apst/oxlint/presets/next";
import { nodePreset } from "@apst/oxlint/presets/node";
import { reactPreset } from "@apst/oxlint/presets/react";
import { vitestPreset } from "@apst/oxlint/presets/vitest";
import { vuePreset } from "@apst/oxlint/presets/vue";
import { describe, it } from "vitest";

import { validateWithOxlint } from "#/integration/helpers/validate";

describe("preset integration test", (): void => {
    it("should validate the common preset with oxlint", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the jsx preset with oxlint", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            jsxPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the react preset with oxlint", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            reactPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the react preset with debug enabled", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            reactPreset({
                debug: true,
            }),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the next preset with oxlint", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            nextPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the node preset with oxlint", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            nodePreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the vitest preset with oxlint", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            vitestPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the vue preset with oxlint", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            vuePreset(),
        ]);

        await validateWithOxlint(config);
    });
});
