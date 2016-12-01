import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {CoursesService} from "../services/courses.service";
import {WaterSourceReportService} from "../services/water_source_report.service";
@Injectable()
export class WSRResolver implements Resolve<any> {
  constructor(private _waterSourceReportsService: WaterSourceReportService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
    return this._waterSourceReportsService.getAll();
  }
}
