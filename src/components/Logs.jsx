import { useEffect, useState } from "react";
import { getLogsData } from "../services/socDataService";
import { useSearchParams } from "react-router-dom";
import LogRecord from "./LogRecord";
import { useFilter } from "./FilterContext";

const LogsComponent = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const { timeFilter } = useFilter();

  const service = searchParams.get("service");
  const logsName = searchParams.get("logs-name");

  useEffect(() => {
    getLogsData(service, logsName, timeFilter).then((res) => {
      setData(res);
  
    });
  }, [service, logsName, timeFilter]);

  let listItems;

  if (data) {
    listItems = data.map((logItem) => {
      return (
        <LogRecord
          key={logItem.timestamp}
          log={logItem}
          serviceType={service}
          logsName={logsName}
        />
      );
    });
  }

  const formatString = (val) => {
    let fStr = val.split("-").join(" ");
    return fStr;
  };

  return (
    <div>
      <h2 className="main-heading">{formatString(logsName)} logs</h2>
      <ul>{listItems}</ul>
    </div>
  );
};
export default LogsComponent;
