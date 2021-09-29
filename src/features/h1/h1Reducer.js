import { SHOW_H1_START, SHOW_H1_SUCCESS, SHOW_H1_ERROR } from "./h1ActionTypes";

const h1InitialState = {
  h1Title: "no title",
  isFetching: false,
  error: null,
};

export const applyH1Reducer = (state = h1InitialState, action) => {
  switch (action.type) {
    case SHOW_H1_START:
      return {
        ...state,
        isFetching: true,
      };
    case SHOW_H1_SUCCESS:
      return {
        ...state,
        h1Title: action.payload.h1Title,
        isFetching: false,
      };
    case SHOW_H1_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
