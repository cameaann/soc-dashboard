import axios from 'axios'
import { DATA_URL } from '../../constants'

const firewallDataUrl = `${DATA_URL}/palomuuri`

export const getFirewallData = async () => {
  const response = await axios.get(firewallDataUrl);
  return response.data;
}
