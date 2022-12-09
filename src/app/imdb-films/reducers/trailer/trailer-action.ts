import {Action} from "@ngrx/store";
import {TrailerModel} from "../../models/trailer-models/trailer.model";

export enum trailerActionsType {
  trailerRequested = '[FILM] trailerRequested',
  trailerUpdated = '[FILM] trailerUpdated'
}

export class TrailerRequestedAction implements Action {
  readonly type = trailerActionsType.trailerRequested;
  constructor(public payload: string) {
  }
}

export class TrailerUpdatedAction implements Action {
  readonly type = trailerActionsType.trailerUpdated;
  constructor(public payload: TrailerModel) {
  }
}

export type TrailerActions = TrailerRequestedAction | TrailerUpdatedAction;
