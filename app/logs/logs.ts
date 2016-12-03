import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Router} from '@angular/router';
import {WaterSourceReportService} from "../services/water_source_report.service";
import {ApiService} from "../services/api";

@Component({
  selector: 'home',
  templateUrl: 'app/logs/logs.html',
})
export class LogsComponent implements OnInit {
  constructor(private api:ApiService, private _router: Router) {
  }
  logs:any[];
  ngOnInit() {
    this.api.get('logs').then(res=>{
      this.logs = res._body;
    })
  }
}
