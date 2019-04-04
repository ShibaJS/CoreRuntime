import { Shiba, ShibaComponent } from "@shibajs/core";
import Detail from "./Detail";

class Index extends ShibaComponent {
     private isLoading = false;

     public view() {
          return (
               <stack>
                    <Detail/>
                    <text text="Hello world!" visiable={this.isLoading}/>
               </stack>
          );
     }
}
runShibaApp(() => <Index/>);
