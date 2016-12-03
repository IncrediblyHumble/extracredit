import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {WaterQualityReport} from "../models/water_quality_report.model";
import {ChartsModule} from "ng2-charts";

@Component({
  selector: 'home',
  templateUrl: 'app/history/history.html',
  styleUrls: [
    'app/history/history.css'
  ]
})
export class HistoryComponent implements OnInit {
  data: any = {};
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'October','Nov', 'Dec'];
  locations: string[];
  selectedLoc: string;
  selectedYear: string;
  selectedStat: string;
  public lineChartOptions: any = {
    animation: false,
    responsive: false
  };

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let reports = this._activatedRoute.snapshot.data['reports'];
    console.log(reports);
    reports.forEach((r: WaterQualityReport)=> {
      let locString = "<" + r.location.latitude + "," + r.location.longitude + ">";
      if (!this.data[locString]) {
        this.data[locString] = {};

      }
      if (!this.data[locString][r.dateReported.getFullYear()]) {
        this.data[locString][r.dateReported.getFullYear()] = {};
        this.months.forEach(m=> {
          this.data[locString][r.dateReported.getFullYear()][m] = {
            count: 0,
            Virus: 0,
            Contaminant: 0
          };
        });
      }
      this.data[locString][r.dateReported.getFullYear()][this.months[r.dateReported.getMonth()]].count++;
      this.data[locString][r.dateReported.getFullYear()][this.months[r.dateReported.getMonth()]].Virus += r.virus;
      this.data[locString][r.dateReported.getFullYear()][this.months[r.dateReported.getMonth()]].Contaminant += r.contaminant;
    });
    this.locations = Object.keys(this.data);
    this.selectedLoc = this.locations[0];
    this.locations.forEach(l=> {
      this.data[l].years = Object.keys(this.data[l]);
    });
    this.update();
    this.selectedStat = "Virus";
  }

  update() {
    this.selectedYear = this.data[this.selectedLoc].years[0];
  }

  getData() {
    let d = {data: [], label: 'Data'};
    this.months.forEach(m=> {
      if (this.data[this.selectedLoc][this.selectedYear][m].count) {
        d.data.push(
          this.data[this.selectedLoc][this.selectedYear][m][this.selectedStat] /
          this.data[this.selectedLoc][this.selectedYear][m].count
        );
      }else {
        d.data.push(0);
      }

    });
    return [d];
  }


}
