import type { OxlintConfig } from "oxlint";

type LintPlugins = Required<Required<OxlintConfig>["plugins"]>;

type LintRules = Required<Required<OxlintConfig>["rules"]>;

export type { LintPlugins, LintRules };
