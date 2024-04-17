import { useState } from "react";
import Header from "./header";
import ServerDataComponent from "./serverCharts/serverDataComponent";

const Layout = () => {
  const [timeFilter, setTimeFilter] = useState("viimeinen tunti");

  const handleOnChange = (time) => {
    setTimeFilter(time)
  };
  return (
    <div>
      <Header handleChange = {handleOnChange}/>
      <ServerDataComponent filter={timeFilter} />
    </div>
  );
};
export default Layout;
