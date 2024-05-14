import TrafficControlChart from "./TrafficControlChart";

const RouterData = ({ filter }) => {
  return (
    <div className="component-container">
      <h3>Reitittimet</h3>
      <div className="general-charts-container">
        <TrafficControlChart time={filter} />
      </div>
    </div>
  );
};

export default RouterData;
