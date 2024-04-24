import ServerData from "./serverCharts/ServerData";
import FirewallData from "./firewallCharts/FirewallData";
import { useFilter } from "./FilterContext";

const Dashboard = () =>{
    const {timeFilter} = useFilter()
    
    return (
        <div>
          <ServerData filter={timeFilter} />
          <FirewallData />
        </div>
      );
    };
    export default Dashboard;
    