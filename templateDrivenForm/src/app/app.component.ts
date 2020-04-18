import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppComponent {
  topics = ["Angular", "React", "Vue"];
}
