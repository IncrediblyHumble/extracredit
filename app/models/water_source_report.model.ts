import {Loc} from "./loc.model";
export class WaterSourceReport{
  WATER_TYPES = ['Bottled','Well','Stream','Lake','Spring','Other'];
  dateReported:number;
  id:number;
  workerName:string;
  type:string;
  location:Loc;
}
