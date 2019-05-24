import Shiba, { ShibaComponent } from "@shibajs/core";

export default class Detail extends ShibaComponent {
    public onCreate() {
        this.setContentView(
            <stack>
                <text text="hahaha!" />
            </stack>,
        );
    }
}
