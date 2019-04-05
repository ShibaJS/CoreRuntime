import Shiba, {binding, ShibaComponent} from "@shibajs/core";
import Detail from "./Detail";

class Index extends ShibaComponent {

    private isLoading = false;

    public view() {
        return (
            <stack text={binding("hello!")}>
                <Detail/>
                <text text="Hello world!" visiable={this.isLoading}/>
            </stack>
        );
    }
}

runShibaApp(() => <Index/>);
