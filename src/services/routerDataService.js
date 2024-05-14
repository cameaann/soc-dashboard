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

const getAttackTypeChartData = (time) => {
  // try {
  const data = getRouterData().then((res) => {
    const filteredByTimeData = applyTimeFilter(res, time);

    const grouped = filteredByTimeData.reduce((acc, { protocol }) => {
      if (protocol) {
        acc[protocol] = (acc[protocol] || 0) + 1;
      }
      return acc;
    }, {});

    const attackTypes = Object.keys(grouped).map((protocol) => ({
      label: protocol,
      value: grouped[protocol],
    }));
    console.log(attackTypes);

    return attackTypes;
  });
  return data;
  // } catch (error) {
  //   console.error("Error fetching attack type chart data:", error);
  //   throw error;
  // }
};

export default { getTrafficControlEvents, getAttackTypeChartData };
