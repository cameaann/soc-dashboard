import Header from "./Header";
import ServerData from "./serverCharts/ServerData";
import FirewallData from "./firewallCharts/FirewallData";
import { useFilter } from "./FilterContext";

const Layout = () => {
  const { timeFilter, setTimeFilter } = useFilter();

  const handleChange = (time) => {
    setTimeFilter(time)
  }

  return (
    <div>
      <Header onChange={handleChange}/>
      <ServerData filter={timeFilter} />
      <FirewallData />
    </div>
  );
};
export default Layout;
