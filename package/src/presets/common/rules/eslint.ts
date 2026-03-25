import type { LintRules } from "#/@types/oxlint";

const RULES_ESLINT_NURSERY = {
    "getter-return": "error",
    "no-unreachable": "error",
} as const satisfies LintRules;

const RULES_ESLINT_PEDANTIC = {
    eqeqeq: [
        "error",
        "always",
    ],
    "no-array-constructor": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-else-return": [
        "error",
        {
            allowElseIf: false,
        },
    ],
    "no-fallthrough": [
        "error",
        {
            allowEmptyCase: true,
        },
    ],
    "no-loop-func": "error",
    "no-new-wrappers": "error",
    "no-object-constructor": "error",
    "no-promise-executor-return": [
        "error",
        {
            allowVoid: false,
        },
    ],
    "no-redeclare": [
        "error",
        {
            builtinGlobals: true,
        },
    ],
    "no-useless-return": "error",
    radix: "error",
} as const satisfies LintRules;

const RULES_ESLINT_PERF = {
    "no-useless-call": "error",
} as const satisfies LintRules;

const RULES_ESLINT_RESTRICTION = {
    "no-div-regex": "error",
    "no-undefined": "error",
    "no-use-before-define": [
        "error",
        {
            allowNamedExports: true,
            classes: true,
            enums: true,
            functions: false,
            ignoreTypeReferences: true,
            typedefs: true,
            variables: false,
        },
    ],
    "no-var": "error",
} as const satisfies LintRules;

const RULES_ESLINT_STYLE = {
    "default-case-last": "error",
    "grouped-accessor-pairs": [
        "error",
        "getBeforeSet",
        {
            enforceForTSTypes: true,
        },
    ],
    "no-extra-label": "error",
    "no-implicit-coercion": "error",
    "no-label-var": "error",
    "no-multi-assign": [
        "error",
        {
            ignoreNonDeclaration: false,
        },
    ],
    "no-template-curly-in-string": "error",
    "no-useless-computed-key": [
        "error",
        {
            enforceForClassMembers: true,
        },
    ],
    "prefer-const": [
        "error",
        {
            destructuring: "all",
            // avoid conflicts with `no-use-before-define`
            ignoreReadBeforeAssign: true,
        },
    ],
    "prefer-promise-reject-errors": [
        "error",
        {
            allowEmptyReject: false,
        },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
} as const satisfies LintRules;

const RULES_ESLINT_SUSPICIOUS = {
    "block-scoped-var": "error",
    "no-extend-native": "error",
    "no-shadow": [
        "error",
        {
            builtinGlobals: false,
            hoist: "all",
            ignoreFunctionTypeParameterNameValueShadow: false,
            ignoreOnInitialization: false,
            ignoreTypeValueShadow: false,
        },
    ],
    "no-unexpected-multiline": "error",
    "no-unneeded-ternary": "error",
} as const satisfies LintRules;

const RULES_ESLINT = {
    ...RULES_ESLINT_NURSERY,
    ...RULES_ESLINT_PEDANTIC,
    ...RULES_ESLINT_PERF,
    ...RULES_ESLINT_RESTRICTION,
    ...RULES_ESLINT_STYLE,
    ...RULES_ESLINT_SUSPICIOUS,
} as const satisfies LintRules;

export {
    RULES_ESLINT,
    RULES_ESLINT_NURSERY,
    RULES_ESLINT_PEDANTIC,
    RULES_ESLINT_PERF,
    RULES_ESLINT_RESTRICTION,
    RULES_ESLINT_STYLE,
    RULES_ESLINT_SUSPICIOUS,
};
