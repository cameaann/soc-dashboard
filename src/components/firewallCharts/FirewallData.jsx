import { useEffect, useState } from "react";
import firewallDataService from "../../services/firewallDataService";
import EventsDistribution from "./EventsDistribution";

const FirewallData = ({ filter }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    firewallDataService.getEventDistribution(filter).then((res) => {
      setEvents(res);
    });
  }, [filter]);

  return (
    <div className="component-container">
      <h3>Palomuuri</h3>
      <div className="general-charts-container">
        <EventsDistribution events={events} />
        <EventsDistribution events={events} />
      </div>
    </div>
  );
};

export default FirewallData;
