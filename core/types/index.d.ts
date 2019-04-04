import Shiba from "./Shiba";
import ShibaComponent from "./ShibaComponent";
import { IView } from "./types";
declare global {
    function registerComponent(name: string, creator: () => ShibaComponent): void;
    function runShibaApp(creator: () => ShibaComponent): void;
    namespace JSX {
        interface IntrinsicElements {
            [name: string]: any;
        }
    }
}

export { ShibaComponent, Shiba };
