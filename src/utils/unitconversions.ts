export type Units = "meters" | "kilometers" | "miles" | "feet";

const metersPerUnit:Record<Units, number> = {
    "meters": 1,
    "kilometers": 1000,
    "miles": 1609.344,
    "feet": 0.3048
}

export function convertLength(
    value: number,
    fromUnit: Units,
    toUnit: Units
): number {
    const valueInMeters = value * metersPerUnit[fromUnit];
    return valueInMeters / metersPerUnit[toUnit];
}