export interface IView {
    className: "IView";
    name: string;
    children: IView[];
    properties: IProperty[];
}

export enum ValueType {
    Function,
    Extension,
    Boolean,
    Number,
    String,
    Null,
}

export interface IShibaFunction {
    className: "IShibaFunction";
    name: string;
    parameters: any[];
}

export interface IShibaExtension {
    className: "IShibaExtension";
    type: string;
    target: string;
    script?: string;
    scriptName?: string;
}

export interface IProperty {
    className: "IProperty";
    name: string;
    value: any;
    valueType: ValueType;
}
