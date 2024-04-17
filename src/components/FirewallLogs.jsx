import { useEffect, useState } from 'react';
import { getLogsData } from '../services/socDataService';

const FirewallLogs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getLogsData('firewall').then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      <h2 className="main-heading">Palomurilogit</h2>
      <ul>
        {data.map(({ action, i }) => {
          return (
            <li key={i}>
              <p>{action}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FirewallLogs;
