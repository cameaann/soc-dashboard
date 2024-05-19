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
    if(val==="login-attempts"){
      return "Kirjautumisyritysten lokit"
    }
    if(val==="updates"){
      return "Järjestelmäpäivitysten lokit"
    }
    if(val==="firewall-distribution"){
      return "Palomuuritapahtumien jakautumisen lokit"
    }
    if(val==="system-vulnerabilities"){
      return "Järjestelmän haavoittuvuuksien lokit"
    }
    if(val==="traffic-control"){
      return "Liikenteen ohjauksen lokit"
    }
    if(val==="attack-type"){
      return "Hyökkäystyyppien lokit"
    }
  };

  return (
    <div>
      <h2 className="main-heading">{formatString(logsName)}</h2>
      <ul>{listItems}</ul>
    </div>
  );
};
export default LogsComponent;
