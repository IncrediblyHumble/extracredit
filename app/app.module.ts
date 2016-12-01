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
import {WaterSourceReportService} from "./services/water_source_report.service";
import {CSRComponent} from "./create_source_report/csr";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, WelcomeComponent, HomeComponent, CSRComponent
  ],
  bootstrap: [AppComponent],
  providers: [ApiService, UserService, WaterSourceReportService]
})
export class AppModule {
}
