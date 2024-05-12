import LoginAttemptsChart from "./LoginAttemptsChart";
import SystemUpdatesChart from "./SystemUpdatesChart";

const ServerData = ({ filter }) => {

  return (
    <div className="component-container">
      <h3>Palvelimet</h3>
      <div className="general-charts-container">
        <LoginAttemptsChart time={filter} />
        <SystemUpdatesChart time={filter} />
      </div>
    </div>
  );
};

export default ServerData;
