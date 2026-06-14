# Oxlint Configuration

A shareable Oxlint configuration.

## Installation

Install these packages as a dev dependencies in the project:

```sh
# npm
npm i -D oxlint @apst/oxlint

# Yarn
yarn add -D oxlint @apst/oxlint

# pnpm
pnpm add -D oxlint @apst/oxlint

# Bun
bun add -D oxlint @apst/oxlint
```

## Usage

Implement the preset into `oxlint.config.ts`:

```ts
import { defineConfig } from "@apst/oxlint";
import { commonPreset } from "@apst/oxlint/presets/common";

export default defineConfig([
    commonPreset(),
]);
```

It is possible to override the default configuration by passing an object to the `defineConfig` function:

```ts
import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import { commonPreset } from "@apst/oxlint/presets/common";

export default defineConfig({
    ignorePatterns: [
        ...IGNORE_PATTERNS_DEFAULT,
        // ...
    ],
}, [
    commonPreset(),
]);
```

## Recommended Configurations

### Frontend with React

```ts
import { defineConfig } from "@apst/oxlint";
import { commonPreset } from "@apst/oxlint/presets/common";
import { jsxPreset } from "@apst/oxlint/presets/jsx";
import { reactPreset } from "@apst/oxlint/presets/react";

export default defineConfig([
    commonPreset(),
    jsxPreset(),
    reactPreset(),
]);
```

Optional add-ons:

- Add `nextPreset` from `@apst/oxlint/presets/next` for Next.js projects
- Add `vitestPreset` from `@apst/oxlint/presets/vitest` for testing with Vitest

### Backend

```ts
import { defineConfig } from "@apst/oxlint";
import { commonPreset } from "@apst/oxlint/presets/common";
import { nodePreset } from "@apst/oxlint/presets/node";

export default defineConfig([
    commonPreset(),
    nodePreset(),
]);
```

Optional add-on:

- Add `vitestPreset` from `@apst/oxlint/presets/vitest` for testing with Vitest

### Fullstack

```ts
import { defineConfig } from "@apst/oxlint";
import { commonPreset } from "@apst/oxlint/presets/common";
import { jsxPreset } from "@apst/oxlint/presets/jsx";
import { reactPreset } from "@apst/oxlint/presets/react";
import { nodePreset } from "@apst/oxlint/presets/node";

export default defineConfig([
    commonPreset(),
    jsxPreset(),
    reactPreset(),
    nodePreset(),
]);
```

Optional add-ons:

- Add `nextPreset` from `@apst/oxlint/presets/next` for Next.js projects
- Add `vitestPreset` from `@apst/oxlint/presets/vitest` for testing with Vitest

## License

This project is licensed under the terms of the MIT license.
