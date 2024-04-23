import { useEffect, useState } from 'react';
import firewallDataService  from '../../services/firewallDataService';
import EventsDistribution from './EventsDistribution';

const FirewallActionPieChart = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    firewallDataService.getEventDistribution().then(res => {
      setEvents(res)
    })

  }, []);

  return (
    <div className="component-container">
      <h3>Palomuuri</h3>
      <EventsDistribution events={events} />
    </div>
  );
};

export default FirewallActionPieChart;
