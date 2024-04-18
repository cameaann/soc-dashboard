import { useEffect, useState } from "react";
import { getLogsData } from "../services/socDataService";
import { useSearchParams } from "react-router-dom";
import Log from "./logComponent";
import Header from "./header";

const LogsComponent = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();

  const service = searchParams.get('service');
  const logsName = searchParams.get('logs-name');
  const timePeriod = searchParams.get('time');

  useEffect(() => {
    getLogsData(service, logsName, timePeriod).then((res) => {
      setData(res);
    });
  }, [service, logsName, timePeriod]);

  let listItems;

  if (data && service === 'server') {
    listItems = data.map((server) => {
      return server.map((logItem) => (
        <Log
          key={logItem.timestamp}
          log={logItem}
          serviceType={service}
          logsName={logsName}
        />
      ));
    });
  } else if (data && service === 'firewall') {
    listItems = data.map((logItem) => {
      return (
        <Log
          key={logItem.timestamp}
          log={logItem}
          serviceType={service}
          logsName={logsName}
        />
      );
    });
  }

  const formatString = (val) => {
    let fStr = val.split('-').join(' ');
    return fStr;
  };

  console.log(data);

  const handleOnChange = (option) => {
    console.log(option);
  };

  return (
    <div>
      <Header handleChange = {handleOnChange}/>
      <h2 className="main-heading">{formatString(logsName)} logs</h2>
      <ul>{listItems}</ul>
    </div>
  );
};
export default LogsComponent;
