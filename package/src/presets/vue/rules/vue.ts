/**
 * No lint rules have been configured for Options API.
 */

import type { LintRules } from "#/@types/oxlint";

const RULES_VUE_CORRECTNESS = {
    "vue/no-export-in-script-setup": "error",
    "vue/no-expose-after-await": "error",
    "vue/no-watch-after-await": "error",
    "vue/valid-define-emits": "error",
    "vue/valid-define-options": "error",
    "vue/valid-define-props": "error",
    "vue/valid-next-tick": "error",
} as const satisfies LintRules;

const RULES_VUE_RESTRICTION = {
    "vue/no-import-compiler-macros": "error",
} as const satisfies LintRules;

const RULES_VUE_STYLE = {
    "vue/define-emits-declaration": [
        "error",
        "type-based",
    ],
    "vue/define-props-declaration": [
        "error",
        "type-based",
    ],
    "vue/define-props-destructuring": [
        "error",
        {
            destructure: "never",
        },
    ],
    "vue/next-tick-style": [
        "error",
        "promise",
    ],
    "vue/require-typed-ref": "error",
} as const satisfies LintRules;

const RULES_VUE_SUSPICIOUS = {
    "vue/no-required-prop-with-default": "error",
} as const satisfies LintRules;

const RULES_VUE = {
    ...RULES_VUE_CORRECTNESS,
    ...RULES_VUE_RESTRICTION,
    ...RULES_VUE_STYLE,
    ...RULES_VUE_SUSPICIOUS,
} as const satisfies LintRules;

export {
    RULES_VUE,
    RULES_VUE_CORRECTNESS,
    RULES_VUE_RESTRICTION,
    RULES_VUE_STYLE,
    RULES_VUE_SUSPICIOUS,
};
