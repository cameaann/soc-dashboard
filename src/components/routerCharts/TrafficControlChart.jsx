import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routerDataService from "../../services/routerDataService";
import AdditionalInfo from "../AdditionalInfo";
import { ResponsivePie } from "@nivo/pie";
import { THEME } from "../../../constants";

const TrafficControlChart = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { time } = { ...props };

  useEffect(() => {
    try {
      routerDataService.getTrafficControlEvents(time).then((res) => {
        console.log(res);
        setData(res);
        setLoading(false);
      });
    } catch (error) {
      console.error();
    }
  }, [time]);

  const totalTrafficEvents = data.reduce((acc, item) => acc + item.value, 0);

  const showLogs = () => {
    navigate(`/logs?service=server&logs-name=trafficControl`);
  };

  console.log(data);

  return (
    <div className="chart-container">
      {loading && <span className="loader"></span>}
      <div className="chart pie" onClick={showLogs}>
        <h4 className="chart-heading">Liikenteen ohjaukset</h4>
        <div className="pie-chart">
          <ResponsivePie
            theme={THEME}
            data={data}
            margin={{ top: 20, right: 10, bottom: 20, left: 0 }}
            startAngle={-174}
            innerRadius={0.3}
            padAngle={0.7}
            cornerRadius={3}
            activeInnerRadiusOffset={2}
            activeOuterRadiusOffset={6}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextOffset={8}
            arcLinkLabelsTextColor="#FFFFFF"
            arcLinkLabelsOffset={-8}
            arcLinkLabelsDiagonalLength={12}
            arcLinkLabelsStraightLength={10}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
          />
        </div>
      </div>
      <AdditionalInfo
        onShowLogs={showLogs}
        totalNumber={totalTrafficEvents}
        text={"Total traffic events"}
      />
    </div>
  );
};
export default TrafficControlChart;
