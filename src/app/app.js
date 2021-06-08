import monthView from "./view/monthView";
import { dataKey, setData, getData } from "./store";

const app = () => {
  setData(dataKey.targetDate, new Date());
  monthView(getData(dataKey.targetDate));
};
export default app;
