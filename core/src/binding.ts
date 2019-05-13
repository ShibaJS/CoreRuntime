import { isString } from "util";
import {IShibaExtension} from "./types";

export function binding<T>(target: string, converter?: string | ((value: T) => any)): IShibaExtension {
    return extension("binding", target, converter);
}

export function extension<T>(type: string, target: string, converter?: string | ((value: T) => any)): IShibaExtension {
    let converterName = "";
    if (converter instanceof Function) {
        converterName = registerConverter(converter);
    } else if (isString(converter)) {
        converterName = converter;
    }
    return {
        className: "IShibaExtension",
        scriptName: converterName,
        target,
        type,
    };
}

function registerConverter(converter: (value: any) => any): string {
    return ""; // TODO
}
