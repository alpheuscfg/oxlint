import type { LintRules } from "#/@types/oxlint";

const RULES_REACT_DEBUG_RESTRICTION = {
    "react/invariant": "error",
    "react/syntax": "error",
    "react/todo": "error",
} as const satisfies LintRules;

const RULES_REACT_DEBUG = {
    ...RULES_REACT_DEBUG_RESTRICTION,
} as const satisfies LintRules;

export { RULES_REACT_DEBUG, RULES_REACT_DEBUG_RESTRICTION };
