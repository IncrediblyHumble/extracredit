import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router, ActivatedRoute} from '@angular/router';
import {WaterQualityReport} from "../models/water_quality_report.model";
import {WaterQualityReportService} from "../services/water_quality_reports_service";

@Component({
  selector: 'home',
  templateUrl: 'app/view_quality_reports/view_quality_reports.html',
  styleUrls: [
    'app/view_quality_reports/view_quality_reports.css'
  ]
})
export class VQRComponent implements OnInit {
  reports: WaterQualityReport[];
  zoom: number = 8;
  latitude: number;
  longitude: number;
  onReport: number;
  disableDelete:boolean;
  constructor(private _userService: UserService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.reports = this._activatedRoute.snapshot.data['reports'];
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
}
