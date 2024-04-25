import { getServerData } from "./socDataService";
import { applyTimeFilter } from "./filterTimeService";

const getLoginAttempts = (time) => {
  const data = getServerData().then((res) => {
    const filteredByTimeData = applyTimeFilter(res, time);
    console.log(filteredByTimeData);

    const groupedArray = Object.groupBy(
      filteredByTimeData,
      ({ server_name }) => server_name
    );

    let loginAttempts = Object.entries(groupedArray)
      .map((x) => {
        let emp = {
          failed: 0,
          successed: 0,
          server: x[0],
        };
        x[1].reduce((acc, el) => {
          if (el.event_type === "login" && el.status === "success") {
            acc.successed++;
          }
          if (el.event_type === "login" && el.status === "failed") {
            acc.failed++;
          }
          return acc;
        }, emp);
        return emp;
      })
      .filter((emp) => emp.successed + emp.failed > 0);

    return loginAttempts;
  });
  return data;
};

const getSystemUpdates = (time) => {
    console.log("Time", time);
  const data = getServerData().then((res) => {
    console.log(res);
    const filteredByTimeData = applyTimeFilter(res, time);
    console.log(filteredByTimeData);

    const groupedArray = Object.groupBy(
      filteredByTimeData,
      ({ server_name }) => server_name
    );
    console.log(groupedArray);

    let updateAttempts = Object.entries(groupedArray)
      .map((x) => {
        let emp = {
          failed: 0,
          successed: 0,
          server: x[0],
        };
        x[1].reduce((acc, el) => {
          if (el.event_type === "update" && el.status === "success") {
            acc.successed++;
          }
          if (el.event_type === "update" && el.status === "failed") {
            acc.failed++;
          }
          return acc;
        }, emp);
        return emp;
      })
      .filter((emp) => emp.successed + emp.failed > 0);

      console.log(updateAttempts);
    return updateAttempts;
  });
  return data;
};

export default { getLoginAttempts, getSystemUpdates };
