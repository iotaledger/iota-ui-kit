export function getEnumLabels(enumToMap: Record<string, string>): Record<string, string> {
    const entriesMapped = Object.entries(enumToMap).map(([key, value]) => [value, key])
    return Object.fromEntries(entriesMapped)
}
