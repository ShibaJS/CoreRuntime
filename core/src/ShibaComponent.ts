import { IView } from "./types";

export abstract class ShibaComponent {

    public get dataContext(): any {
        if (this._dataContext == null) {
            if (this._dataContextProxy == null) {
                this._dataContextProxy = new Proxy({}, this);
            }
        }
        return this._dataContextProxy;
    }

    public set dataContext(v: any) {
        this._dataContextProxy = new Proxy(v, this);
        this._dataContext = v;
        this.onJavascriptDataContextChanged(this._dataContextProxy);
    }

    // tslint:disable-next-line:variable-name
    private _dataContext: any = null;
    // tslint:disable-next-line:variable-name
    private _dataContextProxy: any;

    protected constructor(props?: any) {
        if (props != null) {
            this.dataContext = props;
        }
    }

    public get(target: any, property: PropertyKey, receiver: any): any {
        if (this._dataContext === null) {
            return this.requireNativeDataContextProperty(property.toString());
        } else {
            return target[property];
        }
    }

    public set(target: any, property: PropertyKey, value: any, receiver: any): boolean {
        target[property] = value;
        if (this._dataContext === null) {
            this.setNativeDataContextProperty(property.toString(), value);
        } else {
            this.onJavascriptDataContextPropertyChanged(property.toString(), value);
        }
        return true;
    }

    protected onCreate() {
        // Do nothing
    }

    protected setContentView(view: IView) {
        // Native code
    }

    private setNativeDataContextProperty(name: string, value: any) {
        // Native code
    }

    private onJavascriptDataContextPropertyChanged(name: string, value: any) {
        // Native code
    }

    private requireNativeDataContextProperty(name: string): any {
        // Native code
    }

    private onJavascriptDataContextChanged(value: any) {
        // Native code
    }
}
