import {Loc} from "./loc.model";
export class WaterSourceReport{
  WATER_TYPES = ['Bottles','Well','Stream','Lake','Spring','Other'];
  dateReported:number;
  id:number;
  workerName:string;
  type:string;
  location:Loc;
}
