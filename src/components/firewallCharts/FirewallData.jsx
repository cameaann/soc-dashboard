import { useEffect, useState } from "react";
import EventsDistribution from "./EventsDistribution";
import SystemVulnerabilitiesBarChart from "./SystemVulnerabilitiesBarChart";
import { getFirewallData } from "../../services/socDataService";

const FirewallData = ({ filter }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFirewallData().then((res) => {
      setEvents(res);
      setLoading(false);
    });
  }, [filter]);

  return (
    <div className="component-container">
      <h3>Palomuuri</h3>
      <div className="general-charts-container">
        <EventsDistribution events={events} time={filter} loading={loading} />
        <SystemVulnerabilitiesBarChart
          events={events}
          time={filter}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default FirewallData;
