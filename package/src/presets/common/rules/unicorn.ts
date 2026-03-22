import type { LintRules } from "#/@types/oxlint";

const RULES_UNICORN_PEDANTIC = {
    "unicorn/consistent-empty-array-spread": "error",
    "unicorn/explicit-length-check": [
        "error",
        {
            "non-zero": "greater-than",
        },
    ],
    "unicorn/new-for-builtins": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-unnecessary-array-flat-depth": "error",
    "unicorn/no-unnecessary-array-splice-count": "error",
    "unicorn/no-unnecessary-slice-end": "error",
    "unicorn/no-useless-promise-resolve-reject": [
        "error",
        {
            allowReject: false,
        },
    ],
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-math-min-max": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/require-number-to-fixed-digits-argument": "error",
} as const satisfies LintRules;

const RULES_UNICORN_RESTRICTION = {
    "unicorn/no-length-as-slice-end": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-number-properties": [
        "error",
        {
            checkInfinity: true,
            checkNaN: true,
        },
    ],
} as const satisfies LintRules;

const RULES_UNICORN_STYLE = {
    "unicorn/consistent-date-clone": "error",
    "unicorn/consistent-existence-index-check": "error",
    "unicorn/empty-brace-spaces": "error",
    "unicorn/error-message": "error",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-null": [
        "error",
        {
            checkStrictEquality: true,
        },
    ],
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-useless-collection-argument": "error",
    "unicorn/numeric-separators-style": [
        "error",
        {
            binary: {
                groupLength: 3,
                minimumDigits: 5,
            },
            hexadecimal: {
                groupLength: 3,
                minimumDigits: 5,
            },
            number: {
                groupLength: 3,
                minimumDigits: 5,
            },
            octal: {
                groupLength: 3,
                minimumDigits: 5,
            },
            onlyIfContainsSeparator: false,
        },
    ],
    "unicorn/prefer-classlist-toggle": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-global-this": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-object-from-entries": "error",
    "unicorn/prefer-response-static-json": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/relative-url-style": [
        "error",
        "always",
    ],
    "unicorn/require-module-attributes": "error",
    "unicorn/switch-case-braces": "error",
    "unicorn/text-encoding-identifier-case": [
        "error",
        {
            withDash: true,
        },
    ],
    "unicorn/throw-new-error": "error",
} as const satisfies LintRules;

const RULES_UNICORN_SUSPICIOUS = {
    "unicorn/consistent-function-scoping": "error",
    "unicorn/no-accessor-recursion": "error",
    "unicorn/no-array-reverse": "error",
    "unicorn/no-array-sort": [
        "error",
        {
            allowExpressionStatement: true,
        },
    ],
    "unicorn/no-instanceof-builtins": [
        "error",
        {
            strategy: "strict",
            useErrorIsError: false,
        },
    ],
} as const satisfies LintRules;

const RULES_UNICORN = {
    ...RULES_UNICORN_PEDANTIC,
    ...RULES_UNICORN_RESTRICTION,
    ...RULES_UNICORN_STYLE,
    ...RULES_UNICORN_SUSPICIOUS,
} as const satisfies LintRules;

export {
    RULES_UNICORN,
    RULES_UNICORN_PEDANTIC,
    RULES_UNICORN_RESTRICTION,
    RULES_UNICORN_STYLE,
    RULES_UNICORN_SUSPICIOUS,
};
