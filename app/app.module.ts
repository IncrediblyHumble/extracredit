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
import {VSRComponent} from "./view_source_reports/view_source_reports";
import {WSRResolver} from "./resolvers/water_source_reports.resolver";
import {AgmCoreModule} from "angular2-google-maps/core";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAYXTNPkPjnEvHOD37KbJdiCwoGP1yn314'
    })
  ],
  declarations: [AppComponent, WelcomeComponent, HomeComponent, CSRComponent, VSRComponent
  ],
  bootstrap: [AppComponent],
  providers: [ApiService, UserService, WaterSourceReportService, WSRResolver]
})
export class AppModule {
}
