import { getFirewallData } from './socDataService'

const getEventDistribution = () =>{
  const eventDistData = getFirewallData().then((result) => {
    const grouped = Object.groupBy(result, ({ action }) => action);
    const data = Object.keys(grouped).map((item) => {
      return {
        id: item,
        label: item,
        value: grouped[item].length,
      };
    });
    return data;
  })
  return eventDistData;
}

export default { getEventDistribution }