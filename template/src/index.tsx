import Shiba from "@shibajs/core";
import "./detail";

registerComponent("index", () => (
    <stack>
        <text text="index" />
        <detail />
    </stack>
));

runShibaApp(() => <index/>);
