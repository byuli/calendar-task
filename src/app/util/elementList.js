import {
  nextMonth,
  beforeMonth,
  nextDate,
  beforeDate,
  input,
  cancel,
  confirm,
  menuMonth,
  menuWeek,
  menuDate,
} from "../action/action";

export const elemetList = {
  input: { name: "input", action: input },

  nextMonth: { name: "nextMonth", action: nextMonth },
  beforeMonth: { name: "beforeMonth", action: beforeMonth },

  nextDate: { name: "nextDate", action: nextDate },
  beforeDate: { name: "beforeDate", action: beforeDate },

  confirmButton: { name: "confirmButton", action: confirm },
  cancelButton: { name: "cancelButton", action: cancel },

  menuMonthButton: { name: "menuMonthButton", action: menuMonth },
  menuDateButton: { name: "menuDateButton", action: menuDate },
  menuWeekButton: { name: "menuWeekButton", action: menuWeek },
};

export const inputElementIdList = {
  scheduleName: "scheduleName",
  startDateInput: "startDateInput",
  startTimeInput: "startTimeInput",
  endDateInput: "endDateInput",
  endTimeInput: "endTimeInput",
};
