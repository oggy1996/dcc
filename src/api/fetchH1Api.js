// import axios from "axios";
import { generateRandomInteger } from "../utils/utils";

const SIMULATED_DELAY_IN_MS = 3000;
// const baseURL = "https://jsonplaceholder.typicode.com/albums";

const getData = (url) => {
  const rand = generateRandomInteger(1, 100);
  if (rand <= 95) {
    return "hi I'm h1 title from api";
  } else {
    throw new Error("hi I'm h1 error from api");
  }
};

const delay = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve();
    }, ms)
  );
};

export const asyncFetchH1 = async (url) => {
  await delay(SIMULATED_DELAY_IN_MS);
  return getData(url);
};
