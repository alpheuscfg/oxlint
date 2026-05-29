# Oxlint Configuration

A shareable Oxlint configuration.

## Usage

Implement the preset into `oxlint.config.ts`:

```ts
import { defineConfig } from "@apst/oxlint";
import { commonPreset } from "@apst/oxlint/presets/common";
import { reactPreset } from "@apst/oxlint/presets/react";

export default defineConfig([
    commonPreset(),
    reactPreset(),
]);
```

It is possible to override the default configuration by passing an object to the `defineConfig` function:

```ts
import { defineConfig } from "@apst/oxlint";
import { IGNORE_PATTERNS_DEFAULT } from "@apst/oxlint/constants/ignore-patterns";
import { commonPreset } from "@apst/oxlint/presets/common";
import { reactPreset } from "@apst/oxlint/presets/react";

export default defineConfig({
    ignorePatterns: [
        ...IGNORE_PATTERNS_DEFAULT,
        // ...
    ],
}, [
    commonPreset(),
    reactPreset(),
]);
```

## License

This project is licensed under the terms of the MIT license.
