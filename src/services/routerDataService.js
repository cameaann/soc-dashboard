import { getRouterData } from "./socDataService";
import { applyTimeFilter } from "./filterTimeService";

const getTrafficControlEvents = (time) => {
  const data = getRouterData().then((res) => {
    const filteredByTimeData = applyTimeFilter(res, time);
    console.log("all data, ", res);
    console.log("filtered", filteredByTimeData);

    const grouped = Object.groupBy(filteredByTimeData, ({ action }) => action);
    console.log("Grouped", grouped);
    const trafficEvents = Object.keys(grouped).map((item) => {
      return {
        id: item,
        label: item,
        value: grouped[item].length,
      };
    });
    console.log(trafficEvents);
    return trafficEvents;

  });

  return data;
};

export default { getTrafficControlEvents };
