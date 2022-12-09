import {TrailerModel} from "./trailer.model";

export class TrailerResponseModel {
  items?:Array<TrailerModel>;
  ErrorMessage: string | undefined;
}
