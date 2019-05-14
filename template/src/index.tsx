import Shiba, { binding } from "@shibajs/core";
import "./detail";

registerComponent("index",
    <stack>
        <text text="index" />
        <detail />
    </stack>,
);

// runShibaApp(() => <index />);
