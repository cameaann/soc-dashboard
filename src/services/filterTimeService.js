import dayjs from "dayjs";

const getTime = (timeString) => {
  if (timeString === "Viimeisen päivän aikana") {
    const currentHour = dayjs().hour(12);
    console.log(currentHour);
  }
}

export default { getTime }


