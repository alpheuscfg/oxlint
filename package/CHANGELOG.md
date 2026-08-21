## Next

### Breaking Changes

- update `oxlint` supported version range to `^1.79.0`

### What's New

- add support for `react/capitalized-calls`
- add support for `react/error-boundaries`
- add support for `react/exhaustive-effect-dependencies`
- add support for `react/globals`
- add support for `react/immutability`
- add support for `react/incompatible-library`
- add support for `react/memo-dependencies`
- add support for `react/no-derhooksiving-state-in-effects`
- add support for `react/no-deriving-state-in-effects`
- add support for `react/preserve-manual-memoization`
- add support for `react/purity`
- add support for `react/refs`
- add support for `react/set-state-in-effect`
- add support for `react/set-state-in-render`
- add support for `react/static-components`
- add support for `react/use-memo`
- add support for `react/unsupported-syntax`
- add support for `react/void-use-memo`
- add support for `react/invariant` via debug option in React preset
- add support for `react/syntax` via debug option in React preset
- add support for `react/todo` via debug option in React preset

### What's Changed

- remove `react/react-compiler` based on the changes in this [Oxlint PR](https://github.com/oxc-project/oxc/pull/25500)

## 0.4.0 (2026-06-26)

### Breaking Changes

- update `oxlint` supported version range to `^1.70.0`

### What's New

- add Vue preset
- add support for `react/react-compiler`
- add support for `react/jsx-no-literals`
- export `RULES_OXC_SUSPICIOUS` from `@apst/oxlint/presets/common`
- export `RULES_NEXTJS` from `@apst/oxlint/presets/next`
- export `RULES_NEXTJS_CORRECTNESS` from `@apst/oxlint/presets/next`

### What's Changed

- update default ignore patterns
- fix plugins being replaced instead of accumulated when composing multiple presets
- disable `unicorn/no-instanceof-builtins`
- remove redundant double-merge performed by built-in presets

## 0.3.0 (2026-06-14)

### Breaking Changes

- update `oxlint` supported version range to `^1.68.0`

### What's New

- add support for `eslint/func-name-matching`
- add support for `eslint/no-implied-eval`
- add support for `eslint/no-unmodified-loop-condition`
- add support for `import/newline-after-import`
- add support for `typescript/no-unnecessary-condition`
- add support for `typescript/explicit-member-accessibility`
- add support for `typescript/method-signature-style`
- add support for `unicorn/no-useless-iterator-to-array`
- add support for `unicorn/consistent-template-literal-escape`
- add support for `unicorn/custom-error-definition`
- add support for `unicorn/switch-case-break-position`
- add support for `jsx-a11y/interactive-supports-focus`
- add support for `jsx-a11y/no-interactive-element-to-noninteractive-role`
- add support for `jsx-a11y/no-noninteractive-element-interactions`
- add support for `jsx-a11y/no-noninteractive-element-to-interactive-role`
- add support for `jsx-a11y/no-static-element-interactions`
- add support for `react/prefer-function-component`
- add support for `react/no-unstable-nested-components`
- add support for `vitest/prefer-importing-vitest-globals`
- add support for `vitest/prefer-strict-boolean-matchers`
- allow `nextjs/no-img-element`

### What's Changed

- better DX for importing constants & presets

## 0.2.0 (2026-05-29)

### What's Changed

- fix typos in `typescript/consistent-type-imports`:
    - `disallowTypeImports` -> `disallowTypeAnnotations`
- remove `@stylistic/eslint-plugin` and it's rules

## 0.1.0 (2026-05-29)

initial release
