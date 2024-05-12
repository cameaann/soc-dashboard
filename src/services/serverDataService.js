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
          failed: 0,
          successed: 0,
          server: server,
        };
        events.reduce((acc, el) => {
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
      .filter((emp) => emp.successed + emp.failed > 0)
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

    console.log(groupedArray);

    let updateAttempts = Object.entries(groupedArray)
      .map(([server, events]) => {
        let emp = {
          failed: 0,
          successed: 0,
          server: server,
        };
        events.reduce((acc, el) => {
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
      .filter((emp) => emp.successed + emp.failed > 0)
      .sort(byServer);


      console.log(updateAttempts);
    return updateAttempts;
  });
  return data;
};


function byServer( a, b ) {
  if (a.server < b.server){
    return -1;
  }
  if ( a.server > b.server ){
    return 1;
  }
  return 0;
}

export default { getLoginAttempts, getSystemUpdates };
