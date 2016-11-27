import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {routing} from "./routes";
import {WelcomeComponent} from "./welcome/welcome";
import {FormsModule} from "@angular/forms";
import {ApiService} from "./services/api";
import {UserService} from "./services/user.service";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./home/home";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, WelcomeComponent, HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [ApiService, UserService]
})
export class AppModule {
}
