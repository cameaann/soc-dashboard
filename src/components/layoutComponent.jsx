import { useState } from "react";
import Header from "./header";
import ServerDataComponent from "./serverCharts/serverDataComponent";
import FirewallActionPieChart from './firewallCharts/FirewallActionPieChart';

const Layout = () => {
  const [timeFilter, setTimeFilter] = useState("viimeinen tunti");

  const handleOnChange = (time) => {
    setTimeFilter(time)
  };
  return (
    <div>
      <Header handleChange = {handleOnChange}/>
      <ServerDataComponent filter={timeFilter} />
      <FirewallActionPieChart />
    </div>
  );
};
export default Layout;
