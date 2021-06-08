import render from "../util/render";
import { elemetList } from "../util/elementList";
import { getTowNumberString } from "../util/calendar";

const inputBox = (dateTime) => {
  const start = new Date(dateTime.startTime);
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const startDate = start.getDate();
  const startHours = start.getHours();
  const startMin = start.getMinutes();

  const end = new Date(dateTime.endTime);
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();
  const endDate = end.getDate();
  const endHours = end.getHours();
  const endMin = end.getMinutes();

  render(`
    <div class="row g-3">
      <div class="col-12">
        <label for="scheduleNameInput" class="form-label">일정</label>
        <input
          class="form-control"
          id="scheduleName"
          placeholder="일정"
        />
      </div>
      <div class="col-6">
        <label for="startDateInput" class="form-label">시작날짜</label>
        <input
          class="form-control"
          id="startDateInput"
          placeholder="시작날짜"
          value="${startYear}/${getTowNumberString(startMonth)}/${getTowNumberString(startDate)}"
        />
      </div>
      <div class="col-6">
        <label for="startTimeInput" class="form-label">시작시간</label>
        <input
          class="form-control"
          id="startTimeInput"
          placeholder="시작시간"
          value="${getTowNumberString(startHours)}:${getTowNumberString(startMin)}"
        />
      </div>
      <div class="col-6">
        <label for="endDateInput" class="form-label">종료날짜</label>
        <input
          class="form-control"
          id="endDateInput"
          placeholder="종료날짜"
          value="${endYear}/${getTowNumberString(endMonth)}/${getTowNumberString(endDate)}"
        />
      </div>
      <div class="col-6">
        <label for="endTimeInput" class="form-label">종료시간</label>
        <input
          class="form-control"
          id="endTimeInput"
          placeholder="종료시간"
          value="${getTowNumberString(endHours)}:${getTowNumberString(endMin)}"
        />
      </div>
      <div class="col-12 text-end">
        <button type="button" name="${elemetList.confirmButton.name}" class="btn btn-primary">확인</button>
        <button type="button" name="${elemetList.cancelButton.name}" class="btn btn-secondary">취소</button>
      </div>
    </div>
  `);
};
export default inputBox;
