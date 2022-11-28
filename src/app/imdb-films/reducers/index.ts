import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {filmNode, filmReducer, FilmState} from "./film.reducer";
import {environment} from "../../../environments/environment";

export interface State {
  [filmNode]: FilmState
}

export const reducers: ActionReducerMap<State, any> = {
  [filmNode]: filmReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
