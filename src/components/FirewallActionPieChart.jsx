import { useEffect, useState } from "react";
import { getFirewallData } from "../services/firewallDataService";
import { ResponsivePie } from "@nivo/pie";

const FirewallActionPieChart = () => {
  const [actions, setActions] = useState([])

  useEffect(() => {
    getFirewallData().then((result) => {
      const grouped = Object.groupBy(result, ({action}) => action)
      const data = Object.keys(grouped).map((item) => {
        return {
          id: item, 
          label: item,
          value: grouped[item].length
        }
      })
      setActions(data)
    })
  },[])

  return (
    <div style={{width: '100%', height: '30rem'}}>
      <h2>Palomuuri</h2>
      <ResponsivePie 
        data={actions}
        arcLinkLabelsTextColor="#fff"
      />
    </div>

  )
}

export default FirewallActionPieChart;