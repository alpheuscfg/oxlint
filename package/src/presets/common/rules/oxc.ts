import type { LintRules } from "#/@types/oxlint";

const RULES_OXC_NURSERY = {
    "oxc/branches-sharing-code": "error",
} as const satisfies LintRules;

const RULES_OXC_RESTRICTION = {
    "oxc/no-const-enum": "error",
} as const satisfies LintRules;

const RULES_OXC_SUSPICIOUS = {
    "oxc/approx-constant": "error",
    "oxc/misrefactored-assign-op": "error",
    "oxc/no-this-in-exported-function": "error",
} as const satisfies LintRules;

const RULES_OXC = {
    ...RULES_OXC_NURSERY,
    ...RULES_OXC_RESTRICTION,
    ...RULES_OXC_SUSPICIOUS,
} as const satisfies LintRules;

export { RULES_OXC, RULES_OXC_NURSERY, RULES_OXC_RESTRICTION };
