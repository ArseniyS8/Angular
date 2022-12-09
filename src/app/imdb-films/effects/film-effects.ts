import {Injectable} from "@angular/core";
import {filmActionsType, FilmUpdatedAction} from "../reducers/film/film-action";
import {map, switchMap} from "rxjs";
import {FilmsResponseModel} from "../models/film-models/film-response.model";
import {FilmService} from "../service/film.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private filmDataServices: FilmService,
  ) {
  }

  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filmActionsType.filmRequested),
      switchMap(() => this.filmDataServices.getTop250films().pipe(
        map((films: FilmsResponseModel) => new FilmUpdatedAction(films))
      ))
    ))
}

