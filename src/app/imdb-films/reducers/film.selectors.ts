import {filmNode} from "./film.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FilmsResponseModel} from "../models/film.response.model";
export const selectFilmsFeature = createFeatureSelector<FilmsResponseModel>(filmNode);


export const selectFilmsData = createSelector(
  selectFilmsFeature,
  (state: FilmsResponseModel) => state.items
);

