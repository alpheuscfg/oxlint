import type { LintRules } from "#/@types/oxlint";

const RULES_JSX_A11Y_CORRECTNESS = {
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/lang": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-aria-hidden-on-focusable": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    "jsx-a11y/no-noninteractive-element-interactions": "error",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
    "jsx-a11y/no-static-element-interactions": [
        "error",
        {
            allowExpressionValues: true,
            handlers: [
                "onClick",
                // key
                "onKeyPress",
                "onKeyDown",
                "onKeyUp",
                // mouse
                "onMouseDown",
                "onMouseUp",
            ],
        },
    ],
    "jsx-a11y/prefer-tag-over-role": "error",
    "jsx-a11y/tabindex-no-positive": "error",
} as const satisfies LintRules;

const RULES_JSX_A11Y = {
    ...RULES_JSX_A11Y_CORRECTNESS,
} as const satisfies LintRules;

export { RULES_JSX_A11Y, RULES_JSX_A11Y_CORRECTNESS };
