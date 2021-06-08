import { elemetList } from "../../util/elementList";

const menu = (target) => {
return `
    <div class="row g-3">
      <div class="col-12 text-end">
        <button type="button" name="${elemetList.menuMonthButton.name}" 
          class="btn ${target === elemetList.menuMonthButton.name ? "btn-primary" : "btn-secondary"}"
        >
          월
        </button>
        <!--button type="button" name="${elemetList.menuWeekButton.name}" 
          class="btn ${target === elemetList.menuWeekButton.name ? "btn-primary" : "btn-secondary"}"
        >
          주
        </button -->
        <button type="button" name="${elemetList.menuDateButton.name}" 
          class="btn ${target === elemetList.menuDateButton.name ? "btn-primary" : "btn-secondary"}"
        >
          일
        </button>
      </div>
    </div>
  `
};
export default menu;
