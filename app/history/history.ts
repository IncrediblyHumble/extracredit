import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {WaterQualityReport} from "../models/water_quality_report.model";

@Component({
  selector: 'home',
  templateUrl: 'app/history/history.html',
  styleUrls: [
    'app/history/history.css'
  ]
})
export class HistoryComponent implements OnInit {
  reports: WaterQualityReport[];
  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }
  public scatter_ChartOptions = {
  };
  ngOnInit() {
    this.reports = this._activatedRoute.snapshot.data['reports'];
    console.log(this.reports);
    if(this.reports.length) {
    }
  }
}
