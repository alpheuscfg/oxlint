/**
 * No lint rules have been configured for class components.
 */

import type { LintRules } from "#/@types/oxlint";

const RULES_REACT_CORRECTNESS = {
    "react/error-boundaries": "error",
    "react/exhaustive-deps": "error",
    "react/forward-ref-uses-ref": "error",
    "react/globals": "error",
    "react/immutability": "error",
    "react/incompatible-library": "error",
    "react/jsx-key": [
        "error",
        {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: false,
            warnOnDuplicates: true,
        },
    ],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-props-no-spread-multi": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": [
        "error",
        {
            noTemplateLiterals: true,
        },
    ],
    "react/no-this-in-sfc": "error",
    "react/preserve-manual-memoization": "error",
    "react/purity": "error",
    "react/refs": "error",
    "react/set-state-in-effect": "error",
    "react/set-state-in-render": "error",
    "react/static-components": "error",
    "react/use-memo": "error",
    "react/unsupported-syntax": "error",
    "react/void-dom-elements-no-children": "error",
    "react/void-use-memo": "error",
} as const satisfies LintRules;

const RULES_REACT_PEDANTIC = {
    "react/checked-requires-onchange-or-readonly": [
        "error",
        {
            ignoreExclusiveCheckedAttribute: false,
            ignoreMissingProperties: false,
        },
    ],
    "react/jsx-no-target-blank": [
        "error",
        {
            allowReferrer: false,
            enforceDynamicLinks: "always",
            forms: true,
            links: true,
            warnOnSpreadAttributes: false,
        },
    ],
    "react/jsx-no-useless-fragment": [
        "error",
        {
            allowExpressions: true,
        },
    ],
    "react/no-unescaped-entities": "error",
    "react/rules-of-hooks": "error",
} as const satisfies LintRules;

const RULES_REACT_PERF = {
    "react/jsx-no-constructed-context-values": "error",
    "react/no-array-index-key": "error",
    "react/no-deriving-state-in-effects": "error",
} as const satisfies LintRules;

const RULES_REACT_RESTRICTION = {
    "react/button-has-type": [
        "error",
        {
            button: true,
            reset: true,
            submit: true,
        },
    ],
    "react/jsx-no-literals": [
        "error",
        {
            ignoreProps: false,
            noAttributeStrings: true,
            noStrings: false,
        },
    ],
    "react/no-react-children": "error",
    "react/prefer-function-component": [
        "error",
        {
            allowErrorBoundary: true,
            allowJsxUtilityClass: true,
        },
    ],
} as const satisfies LintRules;

const RULES_REACT_STYLE = {
    "react/function-component-definition": [
        "error",
        {
            namedComponents: [
                "arrow-function",
            ],
            unnamedComponents: [
                "arrow-function",
            ],
        },
    ],
    "react/jsx-boolean-value": [
        "error",
        "never",
    ],
    "react/jsx-curly-brace-presence": [
        "error",
        "always",
    ],
    "react/jsx-fragments": [
        "error",
        "syntax",
    ],
    "react/jsx-pascal-case": [
        "error",
        {
            allowAllCaps: false,
            allowLeadingUnderscore: false,
            allowNamespace: true,
        },
    ],
    "react/self-closing-comp": [
        "error",
        {
            component: true,
            html: true,
        },
    ],
} as const satisfies LintRules;

const RULES_REACT_SUSPICIOUS = {
    "react/capitalized-calls": "error",
    "react/exhaustive-effect-dependencies": "error",
    "react/hooks": "error",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/memo-dependencies": "error",
    "react/no-namespace": "error",
    "react/no-unstable-nested-components": [
        "error",
        {
            allowAsProps: true,
        },
    ],
} as const satisfies LintRules;

const RULES_REACT = {
    ...RULES_REACT_CORRECTNESS,
    ...RULES_REACT_PEDANTIC,
    ...RULES_REACT_PERF,
    ...RULES_REACT_RESTRICTION,
    ...RULES_REACT_STYLE,
    ...RULES_REACT_SUSPICIOUS,
} as const satisfies LintRules;

export {
    RULES_REACT,
    RULES_REACT_CORRECTNESS,
    RULES_REACT_PEDANTIC,
    RULES_REACT_PERF,
    RULES_REACT_RESTRICTION,
    RULES_REACT_STYLE,
    RULES_REACT_SUSPICIOUS,
};
