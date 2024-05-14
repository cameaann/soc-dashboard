import ServerData from "./serverCharts/ServerData";
import FirewallData from "./firewallCharts/FirewallData";
import { useFilter } from "./FilterContext";
import RouterData from "./routerCharts/RouterData";

const Dashboard = () => {
  const { timeFilter } = useFilter();
  return (
    <div>
      <ServerData filter={timeFilter} />
      <FirewallData filter={timeFilter} />
      <RouterData filter={timeFilter} />
    </div>
  );
};
export default Dashboard;
