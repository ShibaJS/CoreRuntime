
// Global declaration
// @ts-ignore
declare global {
    // @ts-ignore
    function registerComponent(name: string, creator: (props?: any) => ShibaComponent): void;
    // @ts-ignore
    function runShibaApp(creator: () => ShibaComponent): void;
    namespace JSX {
        // tslint:disable-next-line:interface-name
        interface IntrinsicElements {
            [name: string]: any;
        }
    }
}
