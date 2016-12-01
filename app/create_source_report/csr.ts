import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {WaterSourceReportService} from "../services/water_source_report.service";
import {WaterSourceReport} from "../models/water_source_report.model";
import {Loc} from "../models/loc.model";

@Component({
  selector: 'home',
  templateUrl: 'app/create_source_report/csr.html',
  styleUrls: [
    'app/create_source_report/csr.css'
  ]
})
export class CSRComponent implements OnInit {
  report:WaterSourceReport;
  constructor(private _router: Router, private userService:UserService, private _waterSourceReportService:WaterSourceReportService) {
  }

  ngOnInit() {
    this.report = new WaterSourceReport();
    this.report.location = new Loc();
    this.report.location.latitude = 34;
    this.report.location.longitude= -88;
    this.report.type = 'Bottled';
  }

  goBack(){
    this._router.navigate(['home']);
  }
  addReport(){
    this.report.workerName = this.userService.getUser().name;
    this._waterSourceReportService.add(this.report);
    this.goBack();
  }
}


