import { IShibaExtension } from "./types";

export function binding<T>(name: string, converter?: (value: T) => any): IShibaExtension {
    return {
        className: "IShibaExtension",
        target: name,
        type: "binding.ts",
    };
}
