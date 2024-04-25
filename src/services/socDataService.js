import axios from 'axios';
import { applyTimeFilter } from './filterTimeService';
import { DATA_URL } from '../../constants';

// const serverDataUrl = "./mock-server-data.json"
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
 
    const filteredByTimeData = applyTimeFilter(res.data, timePeriod)
    
    if (data === 'login-attempts') {
      let loginAttempts = filteredByTimeData.filter(x => x.event_type === 'login')
      return loginAttempts;
    }
    if(data === 'updates'){
      let updateAttempts = filteredByTimeData.filter(x => x.event_type === 'update')
      return updateAttempts;
    }
  }
  if (info === 'firewall') {
    const res = await axios.get(firewallDataUrl);
    console.log(res.data);

    return res.data;
  }
};

export { getServerData, getFirewallData, getLogsData };
