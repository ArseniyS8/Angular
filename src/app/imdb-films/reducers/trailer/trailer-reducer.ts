import {TrailerActions, trailerActionsType} from "./trailer-action";

export const trailerNode = 'trailer';

interface TrailerResponseModel {
}

export interface TrailerState extends TrailerResponseModel {
}

const initialState: TrailerState = {
  errorMessage: '',
  id: []
};

export const trailerReducer = (state: TrailerState = initialState, action: TrailerActions) => {
  switch (action.type) {
    case trailerActionsType.trailerUpdated:
      return {
        ...state,
        id: action.payload.iMDbId
      };
    default:
      return state;
  }
}
