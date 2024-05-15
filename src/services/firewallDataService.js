import { applyTimeFilter } from "./filterTimeService";

export const getEventDistribution = (events, time) => {
  const filteredByTimeData = applyTimeFilter(events, time);
  const grouped = Object.groupBy(filteredByTimeData, ({ action }) => action);
  const data = Object.keys(grouped).map((item) => {
    return {
      id: item,
      label: item,
      value: grouped[item].length,
    };
  });
  return data;
};

export const getSystemVulnerabilities = (events, time) => {
  const filteredByTimeData = applyTimeFilter(events, time);
  const filterByDetected = filteredByTimeData.filter(
    (log) => log.action === "detected"
  );
  const grouped = Object.groupBy(
    filterByDetected,
    ({ source_ip }) => source_ip
  );
  const data = Object.keys(grouped).map((item) => {
    return {
      id: item,
      value: grouped[item].length,
    };
  });
  return data;
};
