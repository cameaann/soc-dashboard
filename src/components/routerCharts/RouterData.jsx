import TrafficControlChart from "./TrafficControlChart";
import AttackTypeChart from "./AttackTypeChart";

const RouterData = ({ filter }) => {
  return (
    <div className="component-container">
      <h3>Reitittimet</h3>
      <div className="general-charts-container">
        <TrafficControlChart time={filter} />
        <AttackTypeChart time={filter} />
      </div>
    </div>
  );
};

export default RouterData;
