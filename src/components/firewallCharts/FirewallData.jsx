import { useEffect, useState } from "react";
import EventsDistribution from "./EventsDistribution";
import SystemVulnerabilitiesBarChart from "./SystemVulnerabilitiesBarChart";
import { getFirewallData } from "../../services/socDataService";

const FirewallData = ({ filter }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getFirewallData().then((res) => {
      setEvents(res);
      console.log(res);
    });
  }, [filter]);

  return (
    <div className="component-container">
      <h3>Palomuuri</h3>
      <div className="general-charts-container">
        <EventsDistribution events={events} time={filter} />
        <SystemVulnerabilitiesBarChart events={events} time={filter} />
      </div>
    </div>
  );
};

export default FirewallData;
