// import { performance, PerformanceObserver } from "perf_hooks";

Object.filterWithKeysAndReduce = (obj, predicate) => {
  return Object.keys(obj)
    .filter((key) => {
      return predicate(obj[key]);
    })
    .reduce((accumulator, currValue, currIndex) => {
      return { ...accumulator, [currValue]: obj[currValue] };
    }, {});
};

Object.filter = (obj, predicate) => {
  var result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && predicate(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
};

export const generateRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const asyncLocalStorage = {
  getitem: (key) => {
    return Promise.resolve().then((result) => {
      return localStorage.getitem(key);
    });
  },

  setItem: (key, value) => {
    return Promise.resolve().then((key, value) => {
      localStorage.setItem(key, value);
    }, null);
  },
};

export const TimeIt = function () {
  var self = this;

  function howLong(iterations, testFunction) {
    var results = [];
    var total = 0;
    for (var i = 0; i < iterations; i++) {
      var start = performance.now();
      testFunction();
      var end = performance.now();
      var duration = end - start;
      results.push(duration);
      total += duration;
    }
    var result = {
      results: results,
      total: total,
      avg: total / results.length,
    };
    return result;
  }
  self.howLong = howLong;
};
