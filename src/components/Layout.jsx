import { useState } from "react";
import Header from "./Header";
import ServerData from "./serverCharts/ServerData";
import FirewallActionPieChart from "./firewallCharts/FirewallActionPieChart";

const Layout = () => {
  const [timeFilter, setTimeFilter] = useState("60 min");

  const handleOnChange = (time) => {
    setTimeFilter(time);
  };
  return (
    <div>
      <Header handleChange={handleOnChange} />
      <ServerData filter={timeFilter} />
      <FirewallActionPieChart />
    </div>
  );
};
export default Layout;
