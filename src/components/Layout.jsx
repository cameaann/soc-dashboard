import Header from "./Header";
import ServerData from "./serverCharts/ServerData";
import FirewallData from "./firewallCharts/FirewallData";
import { useFilter } from "./FilterContext";

const Layout = () => {
  const { timeFilter } = useFilter();

  return (
    <div>
      <Header />
      <ServerData filter={timeFilter} />
      <FirewallData />
    </div>
  );
};
export default Layout;
