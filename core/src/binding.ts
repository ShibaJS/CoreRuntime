import crypto from "crypto";
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
    const hash = "_" + crypto.createHash("sha256").update(converter.toString()).digest("hex");
    const g: any = global;
    g[hash] = converter;
    return hash;
}
