import { SHOW_H1_START, SHOW_H1_SUCCESS, SHOW_H1_ERROR } from "./h1ActionTypes";
import { asyncFetchH1 } from "../../api/fetchH1Api";

export const doShowH1Start = () => {
  return {
    type: SHOW_H1_START,
    payload: {
      isFetching: true,
    },
  };
};

export const doShowH1Success = (title) => {
  return {
    type: SHOW_H1_SUCCESS,
    payload: {
      h1Title: title,
    },
  };
};

export const doShowH1Error = (error) => {
  return {
    type: SHOW_H1_ERROR,
    payload: {
      error: error,
    },
  };
};

export const doAsyncFetchH1 = (url) => async (dispatch) => {
  dispatch(doShowH1Start());
  try {
    const title = await asyncFetchH1(url);
    dispatch(doShowH1Success(title));
  } catch (error) {
    dispatch(doShowH1Error(error));
  }
};
