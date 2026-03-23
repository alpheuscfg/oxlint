import type { LintRules } from "#/@types/oxlint";

const RULES_PROMISE_CORRECTNESS = {
    "promise/no-new-statics": "error",
    "promise/valid-params": "error",
} as const satisfies LintRules;

const RULES_PROMISE_NURSERY = {
    "promise/no-return-in-finally": "error",
} as const satisfies LintRules;

const RULES_PROMISE_RESTRICTION = {
    "promise/catch-or-return": [
        "error",
        {
            allowFinally: true,
            allowThen: false,
        },
    ],
    "promise/spec-only": "error",
} as const satisfies LintRules;

const RULES_PROMISE_STYLE = {
    "promise/prefer-catch": "error",
} as const satisfies LintRules;

const RULES_PROMISE_SUSPICIOUS = {
    "promise/no-multiple-resolved": "error",
} as const satisfies LintRules;

const RULES_PROMISE = {
    ...RULES_PROMISE_CORRECTNESS,
    ...RULES_PROMISE_NURSERY,
    ...RULES_PROMISE_RESTRICTION,
    ...RULES_PROMISE_STYLE,
    ...RULES_PROMISE_SUSPICIOUS,
} as const satisfies LintRules;

export {
    RULES_PROMISE,
    RULES_PROMISE_CORRECTNESS,
    RULES_PROMISE_NURSERY,
    RULES_PROMISE_RESTRICTION,
    RULES_PROMISE_STYLE,
    RULES_PROMISE_SUSPICIOUS,
};
