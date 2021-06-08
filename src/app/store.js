window.appStore = {};

export const dataKey = {
  targetDate : "targetDate",
  selectDateTime:  "selectDateTime",
};

export const setData = (key, value) => {
  window.appStore[key] = value;
};

export const getData = (key) => {
  return window.appStore[key];
};
