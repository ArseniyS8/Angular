import {Action} from "@ngrx/store";
import {FilmsResponseModel} from "../../models/film-models/film-response.model";

export enum filmActionsType {
  filmRequested = '[FILM] filmRequested',
  filmUpdated = '[FILM] filmUpdated'
}

export class FilmRequestedAction implements Action {
  readonly type = filmActionsType.filmRequested;
}

export class FilmUpdatedAction implements Action {
  readonly type = filmActionsType.filmUpdated;

  constructor(public payload: FilmsResponseModel) {
  }
}

export type FilmActions = FilmRequestedAction | FilmUpdatedAction;
