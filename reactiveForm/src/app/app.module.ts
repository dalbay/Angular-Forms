import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  registrationForm = new FormGroup({
    userName: new FormControl("Joe"), //default value
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
  });
}
