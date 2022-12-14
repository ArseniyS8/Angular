import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilmsResponseModel} from "../models/film-models/film-response.model";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private http: HttpClient) {
  }

  getTop250films(): Observable<FilmsResponseModel> {
    return this.http.get<FilmsResponseModel>('https://imdb-api.com/en/API/Top250Movies/k_9o8hol0d');
  }
}




