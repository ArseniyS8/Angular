import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TrailerResponseModel} from "../../models/trailer-models/trailer-response.model";
import {trailerNode} from "./trailer-reducer";

export const selectTrailerFeature = createFeatureSelector<TrailerResponseModel>(trailerNode);

export const selectTrailerData = createSelector(
  selectTrailerFeature,
  (state: TrailerResponseModel) => state
);
