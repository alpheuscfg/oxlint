/**
 * `@stylistic/eslint-plugin` is used to enforce
 * some stylistic rules that are currently missing in `oxfmt`.
 */

import type { UnprefixedRuleOptions as RawRules } from "@stylistic/eslint-plugin";

type FirstElement<T> = T extends readonly [
    infer U,
    ...unknown[],
]
    ? U
    : T extends readonly (infer U)[]
      ? U
      : never;

type Rules<T extends RawRules = RawRules> = {
    [K in keyof T as `@stylistic/eslint-plugin/${K & string}`]?: [
        ("allow" | "off" | "warn" | "error" | "deny") | number,
        FirstElement<T[K]>,
    ];
};

const RULES_STYLISTIC = {
    "@stylistic/eslint-plugin/array-bracket-newline": [
        "error",
        {
            multiline: true,
            minItems: 1,
        },
    ],
    "@stylistic/eslint-plugin/array-element-newline": [
        "error",
        {
            multiline: true,
            minItems: 1,
        },
    ],
    // make every array element come with a trailing comma
    "@stylistic/eslint-plugin/comma-dangle": [
        "error",
        "always-multiline",
    ],
    // make every newline rules consistent with 4 spaces indent
    "@stylistic/eslint-plugin/indent": [
        "error",
        4,
    ],
} as const satisfies Rules;

export { RULES_STYLISTIC };
