import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Router, ActivatedRoute} from '@angular/router';
import {WaterSourceReportService} from "../services/water_source_report.service";
import {WaterSourceReport} from "../models/water_source_report.model";

@Component({
  selector: 'home',
  templateUrl: 'app/view_source_reports/view_source_reports.html',
  styleUrls: [
    'app/view_source_reports/view_source_reports.css'
  ]
})
export class VSRComponent implements OnInit {
  reports: WaterSourceReport[];
  zoom: number = 8;
  latitude: number;
  longitude: number;
  onReport: number;
  disableDelete:boolean;
  constructor(private _userService: UserService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _waterSourceReportsService: WaterSourceReportService) {
  }

  ngOnInit() {
    this.reports = this._activatedRoute.snapshot.data['reports'];
    console.log(this.reports);
    if(this.reports.length) {
      this.latitude = this.reports[0].location.latitude;
      this.longitude = this.reports[0].location.longitude;
    }
    this.onReport = 0;
    this.disableDelete = !this._userService.isLoggedIn();
  }

  mapClicked($event: MouseEvent) {

  }

  clickedMarker(r) {
    this.onReport = this.reports.indexOf(r);
  }

  centerMap() {
    this.longitude = this.reports[this.onReport].location.longitude;
    this.latitude = this.reports[this.onReport].location.latitude;
  }

  next() {
    if (this.onReport + 1 >= this.reports.length) {
      this.onReport = 0;
    } else {
      this.onReport++;
    }
    this.centerMap();
  }

  prev() {
    if (this.onReport - 1 < 0) {
      this.onReport = this.reports.length - 1;
    } else {
      this.onReport--;
    }
    this.centerMap();
  }

  back(){
    if(this._userService.isLoggedIn()){
      this._router.navigate(['home']);
    }else {
      this._router.navigate(['']);
    }
  }
  deleteReport(){
      this._waterSourceReportsService.deleteReport(this.reports[this.onReport]).then(res=>{
        this._waterSourceReportsService.getAll().then(res=>{
          this.reports = res;
          this.next();
        })
      });
  }
}
