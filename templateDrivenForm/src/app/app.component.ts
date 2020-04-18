import { Component } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  topics = ["Angular", "React", "Vue"];

  topicHasError = true;

  validateTopic(value) {
    if (value === "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  userModel = new User(
    "",
    "rob@test.com",
    1234567890,
    "default",
    "morning",
    true
  );
}
