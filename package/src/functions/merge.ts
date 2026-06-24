import { mergeWith } from "es-toolkit";

const mergeUserConfig = <
    T extends Record<PropertyKey, any>,
    S extends Record<PropertyKey, any>,
>(
    target: T,
    source?: S,
): T & S => {
    if (!source) return target;

    return mergeWith(
        target,
        source,
        (_: unknown, sourceValue: unknown): unknown => {
            // array replacement
            if (Array.isArray(sourceValue)) return sourceValue;

            // default deep merge
            return void 0;
        },
    );
};

const dedupe = <T>(values: readonly T[]): T[] => {
    const seen: Set<T> = new Set();

    const result: T[] = [];

    for (const value of values) {
        if (seen.has(value)) continue;

        seen.add(value);

        result.push(value);
    }

    return result;
};

const mergePresetConfig = <
    T extends Record<PropertyKey, any>,
    S extends Record<PropertyKey, any>,
>(
    target: T,
    source: S,
): T & S => {
    return mergeWith(
        target,
        source,
        (targetValue: unknown, sourceValue: unknown): unknown => {
            // array concatenation with deduplication
            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                return dedupe([
                    ...targetValue,
                    ...sourceValue,
                ]);
            }

            // default deep merge
            return void 0;
        },
    );
};

export { mergePresetConfig, mergeUserConfig };
