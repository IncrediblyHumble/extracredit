import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {WaterQualityReportService} from "../services/water_quality_reports_service";
@Injectable()
export class WQRResolver implements Resolve<any> {
  constructor(private _waterQualityReportsService: WaterQualityReportService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
    return this._waterQualityReportsService.getAll();
  }
}
