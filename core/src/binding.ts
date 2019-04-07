import {IShibaExtension} from "./types";

export function binding<T>(target: string, converter?: string | ((value: T) => any)): IShibaExtension {
    return extension("binding", target, converter);
}

// TODO: converter
export function extension<T>(type: string, target: string, converter?: string | ((value: T) => any)): IShibaExtension {
    return {
        className: "IShibaExtension",
        target,
        type,
    };
}
