import Shiba, { binding } from "@shibajs/core";
// import "./detail";

// registerComponent("index",
//     <stack>
//         <text text="index" />
//         <detail />
//     </stack>,
// );

// runShibaApp(() => <index />);

// tslint:disable-next-line:no-console
console.log(
    JSON.stringify(
        <stack>
            <text aaa={binding("haha", "dsads")} bbb={binding("haha", (it) => it)} text="sadsadsa">
                dsafdsa
                <haha>
                </haha>
            </text>
        </stack>,
    ),
);
