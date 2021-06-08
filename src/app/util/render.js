import { elemetList } from "../util/elementList";

const render = (html) => {
  const eventAction = (type) => {
    Object.keys(elemetList).map((key) => {
      const ele = elemetList[key];
      const elementList = document.getElementsByName(ele.name);
      [].forEach.call(elementList, (item) => {
        item[type]("click", ele.action);
      });
    });
  };

  eventAction("removeEventListener");
  document.getElementById("root").innerHTML = html;
  eventAction("addEventListener");
};
export default render;
