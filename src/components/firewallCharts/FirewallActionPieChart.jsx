import { useEffect, useState } from 'react';
import { getFirewallData } from '../../services/firewallDataService';
import EventsDistribution from './EventsDistribution';

const FirewallActionPieChart = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getFirewallData().then((result) => {
      const grouped = Object.groupBy(result, ({ action }) => action);
      const data = Object.keys(grouped).map((item) => {
        return {
          id: item,
          label: item,
          value: grouped[item].length,
        };
      });
      setEvents(data);
    });
  }, []);

  return (
    <div className="component-container">
      <h3>Palomuuri</h3>
      <EventsDistribution events={events} />
    </div>
  );
};

export default FirewallActionPieChart;
