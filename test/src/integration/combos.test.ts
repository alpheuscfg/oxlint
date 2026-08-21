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

describe("preset combination integration test", (): void => {
    it("should validate the frontend stack: common + jsx + react", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            reactPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the frontend stack: common + jsx + vue", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            vuePreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the next stack: common + jsx + react + next", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            reactPreset(),
            nextPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the backend stack: common + node", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            nodePreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the backend stack with the vitest add-on: common + node + vitest", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            nodePreset(),
            vitestPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the fullstack stack: common + jsx + react + node", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            reactPreset(),
            nodePreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the fullstack stack: common + jsx + vue + node", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            vuePreset(),
            nodePreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the fullstack stack with the vitest add-on: common + jsx + react + node + vitest", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            reactPreset(),
            nodePreset(),
            vitestPreset(),
        ]);

        await validateWithOxlint(config);
    });

    it("should validate the fullstack stack with the vitest add-on: common + jsx + vue + node + vitest", async (): Promise<void> => {
        const config: OxlintConfig = defineConfig([
            commonPreset(),
            jsxPreset(),
            vuePreset(),
            nodePreset(),
            vitestPreset(),
        ]);

        await validateWithOxlint(config);
    });
});
