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
    
    if (data === 'login-attempts') {
      let loginAttempts = res.data.filter(x => x.event_type === 'login')
      console.log('loginAttempts', loginAttempts);
      return loginAttempts;
    }
  }
  if (info === 'firewall') {
    const res = await axios.get(firewallDataUrl);
    console.log(res.data);
    return res.data;
  }
};

export { getServerData, getFirewallData, getLogsData };
