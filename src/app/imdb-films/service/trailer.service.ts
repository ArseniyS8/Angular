import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrailerModel} from "../models/trailer-models/trailer.model";

@Injectable({
  providedIn: 'root'
})
export class TrailerService {
  constructor(private http: HttpClient) {
  }
  getTrailerResponseModel(id:string): Observable<TrailerModel>{
    return this.http.get<TrailerModel>(`https://imdb-api.com/en/API/Trailer/k_9o8hol0d/${id}`)
  }
}
