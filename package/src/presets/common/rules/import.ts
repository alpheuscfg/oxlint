import type { LintRules } from "#/@types/oxlint";

const RULES_IMPORT_CORRECTNESS = {
    "import/default": "error",
    "import/namespace": "error",
} as const satisfies LintRules;

const RULES_IMPORT_NURSERY = {
    "import/export": "error",
    "import/named": "error",
} as const satisfies LintRules;

const RULES_IMPORT_RESTRICTION = {
    "import/extensions": [
        "error",
        "always",
        {
            // source
            js: "never",
            ts: "never",
            mjs: "never",
            mts: "never",
            cjs: "never",
            cts: "never",
            jsx: "never",
            tsx: "never",
            // configurations
            checkTypeImports: true,
            ignorePackages: true,
        },
    ],
    "import/no-cycle": "error",
} as const satisfies LintRules;

const RULES_IMPORT_STYLE = {
    "import/consistent-type-specifier-style": [
        "error",
        "prefer-top-level",
    ],
    "import/first": "error",
    "import/no-duplicates": [
        "error",
        {
            considerQueryString: true,
            preferInline: false,
        },
    ],
    "import/no-mutable-exports": "error",
} as const satisfies LintRules;

const RULES_IMPORT_SUSPICIOUS = {
    "import/no-empty-named-blocks": "error",
    "import/no-named-as-default": "error",
    "import/no-self-import": "error",
} as const satisfies LintRules;

const RULES_IMPORT = {
    ...RULES_IMPORT_CORRECTNESS,
    ...RULES_IMPORT_NURSERY,
    ...RULES_IMPORT_RESTRICTION,
    ...RULES_IMPORT_STYLE,
    ...RULES_IMPORT_SUSPICIOUS,
} as const satisfies LintRules;

export {
    RULES_IMPORT,
    RULES_IMPORT_CORRECTNESS,
    RULES_IMPORT_NURSERY,
    RULES_IMPORT_RESTRICTION,
    RULES_IMPORT_STYLE,
    RULES_IMPORT_SUSPICIOUS,
};
