import {FilmsResponseModel} from "../models/film-response.model";
import {FilmActions, filmActionsType} from "./film-action";

export const filmNode = 'film';

export interface FilmState extends FilmsResponseModel{
}

const initialState: FilmState = {
  errorMessage: '',
  items: []
};

export const filmReducer = (state: FilmState = initialState, action: FilmActions) => {
  switch (action.type) {
    case filmActionsType.filmUpdated:
      return {
        ...state,
        items: action.payload.items
      };
    default:
      return state;
  }
}
