import type { LintRules } from "#/@types/oxlint";

const RULES_NODE_STYLE = {
    "node/no-exports-assign": "error",
} as const satisfies LintRules;

const RULES_NODE_RESTRICTION = {
    "node/handle-callback-err": [
        "error",
        "^(err|error)$",
    ],
    "node/no-new-require": "error",
    "node/no-path-concat": "error",
} as const satisfies LintRules;

const RULES_NODE = {
    ...RULES_NODE_STYLE,
    ...RULES_NODE_RESTRICTION,
} as const satisfies LintRules;

export { RULES_NODE, RULES_NODE_RESTRICTION, RULES_NODE_STYLE };
