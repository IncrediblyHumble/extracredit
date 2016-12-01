import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {Loc} from "../models/loc.model";
import {WaterQualityReport} from "../models/water_quality_report.model";
import {WaterQualityReportService} from "../services/water_quality_reports_service";

@Component({
  selector: 'home',
  templateUrl: 'app/create_quality_report/cqr.html',
  styleUrls: [
    'app/create_quality_report/cqr.css'
  ]
})
export class CQRComponent implements OnInit {
  report:WaterQualityReport;
  constructor(private _router: Router, private userService:UserService, private _waterQualityReportService:WaterQualityReportService) {
  }

  ngOnInit() {
    this.report = new WaterQualityReport();
    this.report.location = new Loc();
    this.report.location.latitude = 34;
    this.report.location.longitude= -88;
    this.report.virus = 0;
    this.report.contaminant = 0;
    this.report.condition = "Safe";
  }

  goBack(){
    this._router.navigate(['home']);
  }
  addReport(){
    this.report.workerName = this.userService.getUser().name;
    this._waterQualityReportService.add(this.report);
    this.goBack();
  }
}
