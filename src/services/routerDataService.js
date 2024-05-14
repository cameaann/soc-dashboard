import { getRouterData } from "./socDataService";
import { applyTimeFilter } from "./filterTimeService";

const getTrafficControlEvents = (time) => {
  const data = getRouterData().then((res) => {
    const filteredByTimeData = applyTimeFilter(res, time);

    const grouped = Object.groupBy(filteredByTimeData, ({ action }) => action);
    const trafficEvents = Object.keys(grouped).map((item) => {
      return {
        id: item,
        label: item,
        value: grouped[item].length,
      };
    });
    return trafficEvents;
  });

  return data;
};

export default { getTrafficControlEvents };
