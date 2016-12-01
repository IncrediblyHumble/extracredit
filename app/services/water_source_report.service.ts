import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ApiService} from "./api";
import {WaterSourceReport} from "../models/water_source_report.model";


@Injectable()
export class WaterSourceReportService {

  constructor(private _http: Http, private _api: ApiService) {
  }

  add(r:WaterSourceReport){
    return this._api.post('addWaterSourceReport',r);
  }
  getAll(){
    return this._api.get('getWaterSourceReports').then((res:any)=>{
      let reports = JSON.parse(res._body).reports;
      reports.forEach((r:WaterSourceReport)=>{
        r.dateReported = new Date(r.dateReported);
      });
      return reports;
    });
  }

  deleteReport(r){
    return this._api.post('deleteWaterSourceReport',r);
  }

}
