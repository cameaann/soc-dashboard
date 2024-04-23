import Header from "./Header";
import ServerData from "./serverCharts/ServerData";
import FirewallActionPieChart from "./firewallCharts/FirewallActionPieChart";
import { useFilter } from "./FilterContext";

const Layout = () => {
  const { timeFilter} = useFilter()

  return (
    <div>
      <Header/>
      <ServerData filter={timeFilter} />
      <FirewallActionPieChart />
    </div>
  );
};
export default Layout;
