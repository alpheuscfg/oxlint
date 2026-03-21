import type { OxlintConfig } from "oxlint";

type LintRules = Required<Required<OxlintConfig>["rules"]>;

export type { LintRules };
