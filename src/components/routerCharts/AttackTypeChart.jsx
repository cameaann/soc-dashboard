import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routerDataService from "../../services/routerDataService";
import AdditionalInfo from "../AdditionalInfo";
import { THEME } from "../../../constants";
import { ResponsiveBar } from "@nivo/bar";

const AttackTypeChart = ({ time }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      routerDataService.getAttackTypeChartData(time).then((res) => {
        setData(res);
        setLoading(false);
      });
    } catch (error) {
      console.error();
    }
  }, [time]);

  const showLogs = () => {
    navigate(`/logs?service=router&logs-name=attack-type&logs-name=protocol`);
  };

  return (
    <div className="chart-container">
      {loading && <span className="loader"></span>}
      <div className="chart" onClick={showLogs}>
        <h4 className="chart-heading">Attack Types by Protocol</h4>
        <ResponsiveBar
          theme={THEME}
          data={data}
          keys={["value", "protocol"]}
          indexBy="label"
          margin={{ top: 40, right: 30, bottom: 90, left: 50 }}
          colors={{ scheme: "pastel1" }}
          axisBottom={{
            legend: "Protocol",
            legendPosition: "middle",
            legendOffset: 40,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Attacks",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
      <AdditionalInfo
        onShowLogs={showLogs}
        totalNumber={data.reduce((acc, cur) => acc + cur.value, 0)}
        text={"Total attacks"}
      />
    </div>
  );
};

export default AttackTypeChart;
