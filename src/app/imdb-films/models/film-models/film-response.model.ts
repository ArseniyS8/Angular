import {FilmsCard} from "./film-card.model";

export class FilmsResponseModel {
  items?:Array<FilmsCard>;
  errorMessage?:string;

}
