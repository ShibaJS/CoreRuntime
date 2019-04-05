import { Event } from "./Event";
import { IShibaComponentLifeCycle } from "./IShibaComponentLifeCycle";

export abstract class ShibaComponent<T = any>
    implements
    IShibaComponentLifeCycle {

    public get dataContext(): any {
        return this._dataContext;
    }

    public set dataContext(v: any) {
        this._dataContext = new Proxy(v, this);
        this.dataContextChanged.invoke(this, this._dataContext);
        this.onDataContextChanged();
    }

    public dataContextPropertyChanged = new Event<string>();
    public dataContextChanged = new Event<any>();
    public properties: Readonly<T> | null;

    // tslint:disable-next-line:variable-name
    private _dataContext: any;

    protected constructor(props?: Readonly<T>) {
        // this.dataContext = this;
        this.properties = props ? props : null;
    }

    public set(target: any, property: PropertyKey, value: any, receiver: any): boolean {
        target[property] = value;
        if (typeof property === "string") {
            this.dataContextPropertyChanged.invoke(target, property);
        }
        return true;
    }

    public abstract view(): any;

    protected onDataContextChanged() {
        // Do nothing
    }

}
