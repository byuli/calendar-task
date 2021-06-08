import { elemetList } from "../util/elementList";
import { getViewTimeList } from "../util/calendar";
import render from "../util/render";
import menu from "./module/menu";

const dateView = (target) => {

  const nowMonth = target.getMonth();
  const nowYear = target.getFullYear();
  const nowDate = target.getDate();

  const menuHtml = menu(elemetList.menuDateButton.name);

  const timeHtml = getViewTimeList(target)
    .map(
      (item) => `
        <div 
          name="${item.isBlankCol ? "" : elemetList.input.name}" 
          data-datestr="${item.dateStr}" 
          data-hour24str="${item.hour24Str}" 
          data-type="date" 
          class="
            col-md-12 col-calendar col-calendar-day 
            ${item.isNow ? "col-calendar-now" : ""} 
          "
        >
          ${item.viewTime}
        </div>
        `
    )
    .join("");

  render(`
    ${menuHtml}
    <div class="row frame-month">
      <div class="col text-center">
        <button type="button" name="${elemetList.beforeDate.name}" class="btn btn-primary">&lt;</button>
      </div>
      <div class="col text-center">
        <h3>${nowYear}년 ${nowMonth + 1}월 ${nowDate}일</h3>
      </div>
      <div class="col text-center">
        <button type="button" name="${elemetList.nextDate.name}" class="btn btn-primary">&gt;</button>
      </div>
    </div>
    <div class="row frame-calendar">${timeHtml}</div>
    `);
};
export default dateView;
