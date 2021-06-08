import dateView from "../view/dateView";
import monthView from "../view/monthView";
import inputView from "../view/inputView";
import { dataKey, getData } from "../store";
import { saveData } from "../util/fetchUtil";
import { inputElementIdList } from "../util/elementList";

export const beforeDate = () => {
  const targetDate = getData(dataKey.targetDate);
  targetDate.setDate(targetDate.getDate() - 1);
  dateView(targetDate);
};

export const beforeMonth = () => {
  const targetDate = getData(dataKey.targetDate);
  targetDate.setMonth(targetDate.getMonth() - 1);
  monthView(targetDate);
};

export const cancel = () => {
  const targetDate = getData(dataKey.targetDate);
  monthView(targetDate);
};

export const confirm = () => {
  const targetDate = getData(dataKey.targetDate);
  const constent = document.getElementById(inputElementIdList.scheduleName).value;
  const startDateInput = document.getElementById(inputElementIdList.startDateInput).value;
  const startTimeInput = document.getElementById(inputElementIdList.startTimeInput).value
  const startTime = (new Date(`${startDateInput} ${startTimeInput}`)).getTime();
  const endDateInput = document.getElementById(inputElementIdList.endDateInput).value;
  const endTimeInput = document.getElementById(inputElementIdList.endTimeInput).value
  const endTime = (new Date(`${endDateInput} ${endTimeInput}`)).getTime();
  saveData(
    {
      constent,
      startTime,
      endTime
    },
    () => {},
    () => {}
  );
  monthView(targetDate);
};

export const input = (e) => {
  const { datestr, type, hour24str } = e.target.dataset;
  
  switch (type) {
    case "month": {
      const tgDate = new Date(`${datestr} 00:00`);
      const tgNextDate = new Date(`${datestr} 00:00`);
      tgNextDate.setDate(tgDate.getDate()+1)
      inputView({
        startTime: tgDate.getTime(),
        endTime: tgNextDate.getTime(),
      });
      break;
    }
    case "date": {
      const tgDate = new Date(`${datestr} ${hour24str}:00`);
      const tgNextDate = new Date(`${datestr} ${hour24str}:00`);
      tgNextDate.setHours(tgDate.getHours()+1)
      inputView({
        startTime: tgDate.getTime(),
        endTime: tgNextDate.getTime(),
      });
      break;
    }
  }
};

export const menuDate = () => {
  const targetDate = getData(dataKey.targetDate);
  dateView(targetDate);
};

export const menuMonth = () => {
  const targetDate = getData(dataKey.targetDate);
  monthView(targetDate);
};

export const menuWeek = () => {
  const targetDate = getData(dataKey.targetDate);
  monthView(targetDate);
};

export const nextDate = () => {
  const targetDate = getData(dataKey.targetDate);
  targetDate.setDate(targetDate.getDate() + 1);
  dateView(targetDate);
};

export const nextMonth = () => {
  const targetDate = getData(dataKey.targetDate);
  targetDate.setMonth(targetDate.getMonth() + 1);
  monthView(targetDate);
};
