import axios from 'axios';
import { DATA_URL } from '../../constants';

const serverDataUrl = `${DATA_URL}/palvelin`;
const firewallDataUrl = `${DATA_URL}/palomuuri`;

const getServerData = async () => {
  const res = await axios.get(serverDataUrl);
  return res.data;
};

const getFirewallData = async () => {
  const response = await axios.get(firewallDataUrl);
  return response.data;
};

const getLogsData = async (info, data, timePeriod) => {
  console.log(info, data, timePeriod);
  if (info === 'server') {
    const res = await axios.get(serverDataUrl);
    const groupedArray = Object.groupBy(
      res.data,
      ({ server_name }) => server_name
    );
    if (data === 'login-attempts') {
      let loginAttempts = Object.entries(groupedArray).map((x) => {
        let sortArr = x[1].filter((el) => el.event_type === 'login');
        return sortArr;
      });
      console.log('loginAttempts', loginAttempts);
      return loginAttempts;
    }
  }
  if (info === 'firewall') {
    const res = await axios.get(firewallDataUrl);
    return res.data;
  }
};

export { getServerData, getFirewallData, getLogsData };
