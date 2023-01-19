type ult = {
  datetime: number;
};

export const ultsSort = (ults: Array<ult>) => {
  ults.sort((ult: ult, ult2: ult) => {
    if (ult.datetime > ult2.datetime) return -1;
    if (ult.datetime < ult2.datetime) return 1;
    return 0;
  });
};
