import { useEffect, useState } from "react";
import { getLogsData } from "../services/socDataService";
import { useSearchParams } from "react-router-dom";
import Log from "./Log";
import Header from "./Header";
import { useFilter } from "./FilterContext";

const LogsComponent = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const { timeFilter } = useFilter();

  const service = searchParams.get("service");
  const logsName = searchParams.get("logs-name");

  console.log(timeFilter);

  useEffect(() => {
    getLogsData(service, logsName, timeFilter).then((res) => {
      setData(res);
    });
    
  }, [service, logsName, timeFilter]);

  let listItems;

  if (data) {
    listItems = data.map((logItem) => {
        return(
        <Log
          key={logItem.timestamp}
          log={logItem}
          serviceType={service}
          logsName={logsName}
        />)
    });
  
  }

  const formatString = (val) => {
    let fStr = val.split("-").join(" ");
    return fStr;
  };

  return (
    <div>
      <Header/>
      <h2 className="main-heading">{formatString(logsName)} logs</h2>
      <ul>{listItems}</ul>
    </div>
  );
};
export default LogsComponent;
