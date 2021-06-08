import { elemetList } from "../util/elementList";
import { getViewDateList } from "../util/calendar";
import render from "../util/render";
import menu from "./module/menu";

const monthView = (target) => {

  const nowMonth = target.getMonth();
  const nowYear = target.getFullYear();

  const menuHtml = menu(elemetList.menuMonthButton.name);

  const dayHtml = getViewDateList(target)
    .map(
      (item) => `
        <div 
          name="${item.isBlankCol ? "" : elemetList.input.name}" 
          data-datestr="${item.dateStr}" 
          data-type="month" 
          class="
            col-md-1 col-calendar 
            ${item.isNowDate ? "col-calendar-now" : ""} 
            ${item.isBlankCol ? "col-calendar-blank" : ""}
          "
        >
          ${item.viewdate}
        </div>
        `
    )
    .join("");

  const firtRowHtml = ["일", "월", "화", "수", "목", "금", "토"]
    .map((item) => `
      <div class="col-md-1 frame-calendar-top">${item}</div>
    `)
    .join("");

  render(`
    ${menuHtml}
    <div class="row frame-month">
      <div class="col text-center">
        <button type="button" name="${elemetList.beforeMonth.name}" class="btn btn-primary">&lt;</button>
      </div>
      <div class="col text-center">
        <h3>${nowYear}년 ${nowMonth + 1}월</h3>
      </div>
      <div class="col text-center">
        <button type="button" name="${elemetList.nextMonth.name}" class="btn btn-primary">&gt;</button>
      </div>
    </div>
    <div class="row frame-calendar seven-cols">${firtRowHtml}${dayHtml}</div>
    `);
};
export default monthView;
