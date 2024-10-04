import { isSunday } from "date-fns";
import { isSaturday } from "date-fns/fp/isSaturday";
import { getCurrencyPrefix } from "./currency";

export { getCurrencyPrefix };

export const isTodayWeekend = () => {
  const today = new Date();
  return isSaturday(today) || isSunday(today) ? "YES" : "NO";
};
