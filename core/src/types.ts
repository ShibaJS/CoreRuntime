interface IView {
    name: string;
    children: IView[];
    properties: IProperty[];
}

enum ValueType {
    Function,
    Extension,
    Boolean,
    Number,
    String,
    Null,
}

interface IShibaFunction {
    name: string;
    parameters: any[];
}

interface IShibaExtension {
    name: string;
    value: string;
    script?: string;
}

interface IProperty {
    name: string;
    value: any;
    valueType: ValueType;
}

export {
    IView,
    IProperty,
    IShibaExtension,
    IShibaFunction,
    ValueType,
};
