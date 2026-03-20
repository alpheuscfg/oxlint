# Oxlint Configuration

A shareable Oxlint configuration.

Implement the configuration into `oxlint.config.ts`:

```ts
import { createConfig } from "@apst/oxlint";

export default createConfig();
```

For extending the configuration, use `withConfig`:

```ts
import { withConfig } from "@apst/oxlint";

export default withConfig({
    rules: {
        "no-console": "warn",
    },
});
```

## License

This project is licensed under the terms of the MIT license.
