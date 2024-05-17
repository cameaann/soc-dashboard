import { getServerData } from "./socDataService";
import { applyTimeFilter } from "./filterTimeService";

const getLoginAttempts = (time) => {
  const data = getServerData().then((res) => {
    const filteredByTimeData = applyTimeFilter(res, time);

    const groupedArray = Object.groupBy(
      filteredByTimeData,
      ({ server_name }) => server_name
    );

    let loginAttempts = Object.entries(groupedArray)
      .map(([server, events]) => {
        let emp = {
          epäonnistuneet: 0,
          onnistuneet: 0,
          server: server,
        };
        events.reduce((acc, el) => {
          if (el.event_type === "login" && el.status === "success") {
            acc.onnistuneet++;
          }
          if (el.event_type === "login" && el.status === "failed") {
            acc.epäonnistuneet++;
          }
          return acc;
        }, emp);
        return emp;
      })
      .filter((emp) => emp.onnistuneet + emp.epäonnistuneet > 0)
      .sort(byServer);

    return loginAttempts;
  });
  return data;
};

const getSystemUpdates = (time) => {
  const data = getServerData().then((res) => {
    const filteredByTimeData = applyTimeFilter(res, time);

    const groupedArray = Object.groupBy(
      filteredByTimeData,
      ({ server_name }) => server_name
    );

    let updateAttempts = Object.entries(groupedArray)
      .map(([server, events]) => {
        let emp = {
          epäonnistuneet: 0,
          onnistuneet: 0,
          server: server,
        };
        events.reduce((acc, el) => {
          if (el.event_type === "update" && el.status === "success") {
            acc.onnistuneet++;
          }
          if (el.event_type === "update" && el.status === "failed") {
            acc.onnistuneet++;
          }
          return acc;
        }, emp);
        return emp;
      })
      .filter((emp) => emp.onnistuneet + emp.epäonnistuneet > 0)
      .sort(byServer);
    return updateAttempts;
  });
  return data;
};

function byServer(a, b) {
  if (a.server < b.server) {
    return -1;
  }
  if (a.server > b.server) {
    return 1;
  }
  return 0;
}

export default { getLoginAttempts, getSystemUpdates };
