export const getViewDateList = (target) => {
  const tgMonth = target.getMonth();
  const tgYear = target.getFullYear();
  const lastDate = new Date(tgYear, tgMonth + 1, 0).getDate();
  const startDay = new Date(tgYear, tgMonth, 1).getDay();
  const maxCol = Math.ceil((+startDay + lastDate) / 7) * 7;
  const now = new Date();
  const nowDate = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();
  const list = [];
  for (let i = 1; i <= maxCol; i++) {
    const isNowDate =
      nowYear === tgYear && nowMonth === tgMonth && nowDate === viewdate;
    const viewdate =
      i > startDay && lastDate >= i - startDay ? i - startDay : "";
    const isBlankCol = viewdate === "";
    list.push({
      isBlankCol,
      viewdate,
      isNowDate,
      dateStr: `${tgYear}/${tgMonth + 1}/${viewdate}`,
    });
  }
  return list;
};

export const h12Convert = (houer24) => {
  const houer = houer24 % 12 || 12;
  const houerAddzero = houer < 10 ? "0" + houer : houer;
  const ampm = houer24 < 12 || houer24 === 24 ? "AM" : "PM";
  return `${houerAddzero} : 00 ${ampm}`;
};

export const getViewTimeList = (target) => {
  const tgYear = target.getFullYear();
  const tgMonth = target.getMonth();
  const tgDate = target.getDate();
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDate = now.getDate();
  const nowHours = now.getHours();

  const list = [];
  for (let h = 0; h < 24; h++) {
    const isNow =
      nowYear === tgYear &&
      nowMonth === tgMonth &&
      nowDate === tgDate &&
      nowHours === h;
    list.push({
      isNow,
      hour24Str: h,
      dateStr: `${tgYear}/${tgMonth + 1}/${tgDate}`,
      viewTime: h12Convert(`${h}`),
    });
  }
  return list;
};

export const getTowNumberString = (num) => {
  return num < 10 ? "0" + num : num;
};
