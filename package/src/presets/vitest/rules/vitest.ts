import type { LintRules } from "#/@types/oxlint";

const RULES_VITEST_CORRECTNESS = {
    "vitest/consistent-each-for": [
        "error",
        {
            describe: "for",
            it: "for",
            suite: "for",
            test: "for",
        },
    ],
    "vitest/hoisted-apis-on-top": "error",
    "vitest/no-conditional-tests": "error",
    "vitest/require-local-test-context-for-concurrent-snapshots": "error",
} as const satisfies LintRules;

const RULES_VITEST_STYLE = {
    "vitest/consistent-vitest-vi": [
        "error",
        {
            fn: "vi",
        },
    ],
    "vitest/no-import-node-test": "error",
    "vitest/prefer-called-times": "error",
    "vitest/prefer-import-in-mock": [
        "error",
        {
            fixable: true,
        },
    ],
} as const satisfies LintRules;

const RULES_VITEST = {
    ...RULES_VITEST_CORRECTNESS,
    ...RULES_VITEST_STYLE,
} as const satisfies LintRules;

export { RULES_VITEST, RULES_VITEST_CORRECTNESS, RULES_VITEST_STYLE };
