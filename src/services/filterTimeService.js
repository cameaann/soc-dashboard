import dayjs from "dayjs";

const getStartTime = (timeString, currentTime) => {
  switch (timeString) {
    case "minute":
      return currentTime.subtract(1, "minute");

    case "hour":
      return currentTime.subtract(1, "hour");

    case "day":
      return currentTime.subtract(1, "day");

    case "week":
      return currentTime.subtract(1, "week");

    case "month":
      return currentTime.subtract(1, "month");

    default:
      throw new Error("Unexpected parameter");
  }
};

const applyTimeFilter = (arr, time) => {
  const currentTime = dayjs();
  let startTime = getStartTime(time, currentTime);

  const filteredData = arr.filter(
    (item) =>
      dayjs(item.timestamp).isAfter(startTime) &&
      dayjs(item.timestamp).isBefore(currentTime)
  );

  return filteredData;
};

export { applyTimeFilter };
