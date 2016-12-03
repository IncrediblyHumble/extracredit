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
import {WaterQualityReportService} from "./services/water_quality_reports_service";
import {WQRResolver} from "./resolvers/water_quality_reports.resolver";
import {VQRComponent} from "./view_quality_reports/view_quality_reports";
import {CQRComponent} from "./create_quality_report/cqr";
import {HistoryComponent} from "./history/history";
import {ChartsModule} from "ng2-charts";
import {LogsComponent} from "./logs/logs";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing, ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYXTNPkPjnEvHOD37KbJdiCwoGP1yn314'
    })
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    CSRComponent,
    VSRComponent,
    VQRComponent,
    CQRComponent,
    LogsComponent,
    HistoryComponent],
  bootstrap: [AppComponent],
  providers: [ApiService, UserService, WaterSourceReportService, WSRResolver, WaterQualityReportService, WQRResolver]
})
export class AppModule {
}
