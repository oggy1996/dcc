import { H1_NAMESPACE } from "./h1Constants";

export const getIsFetchingH1 = (state, props) => {
  // console.log(`selector get is fetching ${JSON.stringify(state, null, 4)}`);
  return state[H1_NAMESPACE].isFetching;
};

export const getH1Title = (state, props) => {
  // console.log(`selector get h1 title ${JSON.stringify(state, null, 4)}`);

  return state[H1_NAMESPACE].h1Title;
};

export const getH1Error = (state, props) => {
  // console.log(`selector get h1 error: ${JSON.stringify(state, null, 4)}`);

  return state[H1_NAMESPACE].error;
};
