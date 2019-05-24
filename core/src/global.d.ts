
// Global declaration
// @ts-ignore
declare global {
    // @ts-ignore
    function registerComponent(name: string, component: () => ShibaComponent): void;
    // @ts-ignore
    function runShibaApp(component: () => ShibaComponent): void;
    namespace JSX {
        // tslint:disable-next-line:interface-name
        interface IntrinsicElements {
            [name: string]: any;
        }
    }
}
