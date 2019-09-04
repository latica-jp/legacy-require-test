function sum(a, b) {
  return a + b;
}

const APP = { appId: 999 };

if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = {
    sum: sum,
    APP: APP
  };
}
