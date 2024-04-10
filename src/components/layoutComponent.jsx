import ServerDataComponent from "./serverCharts/serverDataComponent"
import FirewallActionPieChart from "./components/FirewallActionPieChart";

const Layout = () =>{
    return(
        <div>
      <h2>Dashboard</h2>
      <ServerDataComponent />
      <FirewallActionPieChart />
    </div>
    )
}
export default Layout