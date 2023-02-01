export const ultsSort = (ults) => {
  ults.sort((ult, ult2) => {
    if (ult.datetime > ult2.datetime) return -1;
    if (ult.datetime < ult2.datetime) return 1;
    return 0;
  });
};
