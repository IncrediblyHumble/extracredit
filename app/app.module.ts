import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {routing} from "./routes";
import {WelcomeComponent} from "./welcome/welcome";
import {FormsModule} from "@angular/forms";
import {ApiService} from "./services/api";
import {UserService} from "./services/user.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, WelcomeComponent],
  bootstrap: [AppComponent],
  providers: [ApiService, UserService]
})
export class AppModule {
}
