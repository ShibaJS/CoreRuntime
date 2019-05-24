import {IProperty, IView, ValueType} from "./types";

export function createElement(element: any, property: any | null, ...children: any[]): IView {
    if (typeof element === "function") {
        const value = element(property);
        return {
            children,
            className: "IView",
            name: "_shibaWrapper",
            properties: [
                {
                    className: "IProperty",
                    name: "view",
                    value,
                    valueType: ValueType.Custom,
                },
            ],
        };
    }
    return {
        children,
        className: "IView",
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

function parseProperty(property: [string, any]): IProperty {
    const name = property[0];
    const value = parseValue(property[1]);
    return {
        className: "IProperty",
        name,
        ...value,
    };
}

function parseValue(value: any): {value: any, valueType: ValueType} {
    if (typeof value === "string") {
        if (value === "true" || value === "false") {
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
        } else {
            return {
                value,
                valueType: ValueType.String,
            };
        }
    } else if (typeof value === "boolean") {
        return {
            value,
            valueType: ValueType.Boolean,
        };
    } else if (typeof value === "number") {
        return {
            value,
            valueType: ValueType.Number,
        };
    } else if (value.className && value.className === "IShibaExtension") {
        return {
            value,
            valueType: ValueType.Extension,
        };
    }
    return {
        value,
        valueType: ValueType.Custom,
    };
}
