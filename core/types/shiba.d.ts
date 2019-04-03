import ShibaComponent from "./ShibaComponent";
declare global {
    function registerComponent(name: string, creator: () => ShibaComponent): void;
    function runShibaApp(): ShibaComponent;
}
export { ShibaComponent, };
