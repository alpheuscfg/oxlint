import type { LintRules } from "#/@types/oxlint";

const RULES_TYPESCRIPT_NURSERY = {
    "typescript/consistent-return": [
        "error",
        {
            treatUndefinedAsUnspecified: false,
        },
    ],
    "typescript/consistent-type-exports": [
        "error",
        {
            fixMixedExportsWithInlineTypeSpecifier: false,
        },
    ],
    "typescript/dot-notation": [
        "error",
        {
            allowIndexSignaturePropertyAccess: false,
            allowKeywords: true,
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
        },
    ],
    "typescript/no-unnecessary-type-conversion": "error",
    "typescript/no-unnecessary-type-parameters": "error",
    "typescript/no-useless-default-assignment": "error",
    "typescript/prefer-optional-chain": [
        "error",
        {
            allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
            checkAny: true,
            checkBigInt: true,
            checkBoolean: true,
            checkNumber: true,
            checkString: true,
            checkUnknown: true,
            requireNullish: false,
        },
    ],
    "typescript/prefer-readonly": [
        "error",
        {
            onlyInlineLambdas: false,
        },
    ],
    "typescript/prefer-regexp-exec": "error",
    "typescript/strict-void-return": [
        "error",
        {
            allowReturnAny: false,
        },
    ],
} as const satisfies LintRules;

const RULES_TYPESCRIPT_PEDANTIC = {
    "typescript/no-misused-promises": [
        "error",
        {
            checksConditionals: true,
            checksSpreads: true,
            checksVoidReturn: {
                arguments: true,
                attributes: true,
                inheritedMethods: true,
                properties: true,
                returns: true,
                variables: true,
            },
        },
    ],
    "typescript/no-mixed-enums": "error",
    "typescript/no-unsafe-argument": "error",
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-unsafe-call": "error",
    "typescript/no-unsafe-function-type": "error",
    "typescript/no-unsafe-member-access": "error",
    "typescript/no-unsafe-return": "error",
    "typescript/only-throw-error": "error",
    "typescript/prefer-includes": "error",
    "typescript/prefer-nullish-coalescing": [
        "error",
        {
            ignoreBooleanCoercion: false,
            ignoreConditionalTests: false,
            ignoreIfStatements: false,
            ignoreMixedLogicalExpressions: false,
            ignorePrimitives: {
                bigint: false,
                boolean: false,
                number: false,
                string: false,
            },
            ignoreTernaryTests: false,
        },
    ],
    "typescript/prefer-promise-reject-errors": [
        "error",
        {
            allowEmptyReject: false,
            allowThrowingAny: false,
            allowThrowingUnknown: false,
        },
    ],
    "typescript/prefer-ts-expect-error": "error",
    "typescript/restrict-plus-operands": [
        "error",
        {
            allowAny: true,
            allowBoolean: true,
            allowNullish: true,
            allowNumberAndString: true,
            allowRegExp: true,
            skipCompoundAssignments: false,
        },
    ],
    "typescript/return-await": [
        "error",
        "always",
    ],
    "typescript/strict-boolean-expressions": [
        "error",
        {
            allowAny: true,
            allowNullableBoolean: false,
            allowNullableEnum: false,
            allowNullableNumber: false,
            allowNullableObject: true,
            allowNullableString: false,
            allowNumber: true,
            allowString: true,
        },
    ],
    "typescript/switch-exhaustiveness-check": [
        "error",
        {
            allowDefaultCaseForExhaustiveSwitch: true,
            considerDefaultExhaustiveForUnions: true,
            requireDefaultForNonUnion: false,
        },
    ],
} as const satisfies LintRules;

const RULES_TYPESCRIPT_RESTRICTION = {
    "typescript/no-empty-object-type": [
        "error",
        {
            allowInterfaces: "with-single-extends",
            allowObjectTypes: "never",
        },
    ],
    "typescript/no-import-type-side-effects": "error",
    "typescript/no-namespace": [
        "error",
        {
            allowDeclarations: false,
            allowDefinitionFiles: true,
        },
    ],
    "typescript/no-non-null-asserted-nullish-coalescing": "error",
    "typescript/no-non-null-assertion": "error",
    "typescript/promise-function-async": [
        "error",
        {
            allowAny: true,
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true,
        },
    ],
    "typescript/use-unknown-in-catch-callback-variable": "error",
} as const satisfies LintRules;

const RULES_TYPESCRIPT_STYLE = {
    "typescript/consistent-type-assertions": [
        "error",
        {
            assertionStyle: "as",
        },
    ],
    "typescript/consistent-type-definitions": [
        "error",
        "type",
    ],
    "typescript/consistent-type-imports": [
        "error",
        {
            disallowTypeImports: true,
            fixStyle: "separate-type-imports",
            prefer: "type-imports",
        },
    ],
    "typescript/no-empty-interface": [
        "error",
        {
            allowSingleExtends: true,
        },
    ],
    "typescript/parameter-properties": [
        "error",
        {
            prefer: "class-property",
        },
    ],
    "typescript/prefer-function-type": "error",
    "typescript/prefer-reduce-type-parameter": "error",
    "typescript/prefer-return-this-type": "error",
} as const satisfies LintRules;

const RULES_TYPESCRIPT_SUSPICIOUS = {
    "typescript/no-confusing-non-null-assertion": "error",
    "typescript/no-unnecessary-template-expression": "error",
    "typescript/no-unnecessary-type-constraint": "error",
    "typescript/no-unsafe-enum-comparison": "error",
} as const satisfies LintRules;

const RULES_TYPESCRIPT = {
    ...RULES_TYPESCRIPT_NURSERY,
    ...RULES_TYPESCRIPT_PEDANTIC,
    ...RULES_TYPESCRIPT_RESTRICTION,
    ...RULES_TYPESCRIPT_STYLE,
    ...RULES_TYPESCRIPT_SUSPICIOUS,
} as const satisfies LintRules;

export {
    RULES_TYPESCRIPT,
    RULES_TYPESCRIPT_NURSERY,
    RULES_TYPESCRIPT_PEDANTIC,
    RULES_TYPESCRIPT_RESTRICTION,
    RULES_TYPESCRIPT_STYLE,
    RULES_TYPESCRIPT_SUSPICIOUS,
};
