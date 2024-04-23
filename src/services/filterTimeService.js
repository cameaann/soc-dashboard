import dayjs from "dayjs";

const getStartTime = (timeString, currentTime) => {
  switch (timeString) {
    case "Viimeisen tunnin aikana":
      return currentTime.subtract(1, "hour");

    case "Viimeisen päivän aikana":
      return currentTime.subtract(1, "day");

    case "Viimeisen viikon aikana":
      return currentTime.subtract(1, "week");

    default:
      throw new Error("Unexpected parameter")
  }
};

const applyTimeFilter = (arr, time) => {
  const currentTime = dayjs();
  let startTime = getStartTime(time, currentTime);

  const filteredData = arr.filter(
    (item) =>
      dayjs(item.timestamp).isAfter(startTime) ||
      dayjs(item.timestamp).isSame(currentTime, "hour")
  );
  return filteredData;
};

export default { applyTimeFilter };
