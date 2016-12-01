import {Loc} from "./loc.model";
export class WaterQualityReport{
  CONDITIONS = ['Safe','Treatable','Unsafe'];
  dateReported:Date;
  id:number;
  workerName:string;
  condition:string;
  location:Loc;
  virus:number;
  contaminant:number;
}
