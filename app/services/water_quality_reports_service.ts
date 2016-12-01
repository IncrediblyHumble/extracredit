import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ApiService} from "./api";
import {WaterQualityReport} from "../models/water_quality_report.model";


@Injectable()
export class WaterQualityReportService {

  constructor(private _http: Http, private _api: ApiService) {
  }

  add(r:WaterQualityReport){
    return this._api.post('addWaterQualityReport',r);
  }
  getAll(){
    return this._api.get('getWaterQualityReports').then((res:any)=>{
      let reports = JSON.parse(res._body).reports;
      reports.forEach((r:WaterQualityReport)=>{
        r.dateReported = new Date(r.dateReported);
      });
      return reports;
    });
  }

}
