import Shiba, { binding, ShibaComponent } from "@shibajs/core";
import Detail from "./Detail";

class Index extends ShibaComponent {
    public onCreate() {
        this.setContentView(
            <stack>
                <Detail value="indexValue!"/>
                <text text="index"/>
            </stack>,
        );
    }
}

runShibaApp(() => <Index />);
