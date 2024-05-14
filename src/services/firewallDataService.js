import { getFirewallData } from "./socDataService";
import { applyTimeFilter } from "./filterTimeService";

const getEventDistribution = (time) => {
  const eventDistData = getFirewallData().then((result) => {
    const filteredByTimeData = applyTimeFilter(result, time);
    const grouped = Object.groupBy(filteredByTimeData, ({ action }) => action);
    const data = Object.keys(grouped).map((item) => {
      return {
        id: item,
        label: item,
        value: grouped[item].length,
      };
    });
    return data;
  });
  return eventDistData;
};

export default { getEventDistribution };
