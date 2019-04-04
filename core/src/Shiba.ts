import { IProperty, IShibaExtension, IShibaFunction, IView, ValueType } from "./types";

const Shiba = {
    createElement,
};

function createElement(element: any, property: any | null, ...child: IView[]): IView {
    // TODO: element can be non string
    return {
        children: child,
        name: element,
        properties: parseProperties(property),
    };
}

function parseProperties(property: any | null): IProperty[] {
    if (property === null) {
        return [];
    }
    return Object.entries(property).map((it) => parseProperty(it));
}

const OpenCurly = "{";
const CloseCurly = "}";
const ExtensionStart = "$";

function parseProperty(property: [string, any]): IProperty {
    const name = property[0];
    const value = parseValue(property[1]);
    return {
        name,
        ...value,
    };
}

function parseValue(value: any): {value: any, valueType: ValueType} {
    if (typeof value === "string") {
        if (value.startsWith(OpenCurly) && value.endsWith(CloseCurly)) {
            // Function call
            const innerValue = value.substring(1, value.length - 2);
            return {
                value: parseShibaFunction(innerValue),
                valueType: ValueType.Function,
            };
        } else if (value.startsWith(ExtensionStart)) {
            // Extension
            return {
                value: parseExtension(value),
                valueType: ValueType.Extension,
            };
        } else if (value === "true" || value === "false") {
            // Boolean value
            return {
                value: value === "true",
                valueType: ValueType.Boolean,
            };
        } else if (!isNaN(Number(value))) {
            // Number value
            return {
                value: Number(value),
                valueType: ValueType.Boolean,
            };
        } else if (value === "null") {
            // null value
            return {
                value,
                valueType: ValueType.Null,
            };
        }
    }
    return {
        value: JSON.stringify(value),
        valueType: ValueType.String,
    };
}

function parseExtension(value: string): IShibaExtension {
    value = value.substring(1);
    let index = value.indexOf(" ");
    const name = value.substring(0, index);
    value = value.substring(index + 1);
    index = value.indexOf(OpenCurly);
    const extension: IShibaExtension = {
        name: name.trim(),
        value: value.trim(),
    };
    if (index !== -1) {
        value = value.substring(index).trim();
        const script = value.substring(1, value.length - 1);
        extension.script = script;
    }
    return extension;
}

function parseShibaFunction(innerValue: string): IShibaFunction {
    const index = innerValue.indexOf("(");
    const name = innerValue.substring(0, index);
    const value = innerValue.substring(index + 1);
    const parameters = value.split(",").map((it) => parseValue(it.trim()));
    return {
        name,
        parameters,
    };
}

export default Shiba;
