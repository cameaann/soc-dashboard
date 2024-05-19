import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routerDataService from "../../services/routerDataService";
import AdditionalInfo from "../AdditionalInfo";
import { ResponsivePie } from "@nivo/pie";
import { THEME, COLORS } from "../../../constants";

const TrafficControlChart = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { time } = { ...props };

  useEffect(() => {
    try {
      routerDataService.getTrafficControlEvents(time).then((res) => {
        setData(res);
        setLoading(false);
      });
    } catch (error) {
      console.error();
    }
  }, [time]);

  const totalTrafficEvents = data.reduce((acc, item) => acc + item.value, 0);

  const showLogs = () => {
    navigate(`/logs?service=router&logs-name=traffic-control`);
  };

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
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextOffset={6}
            arcLinkLabelsTextColor="#FFFFFF"
            arcLinkLabelsOffset={-8}
            arcLinkLabelsDiagonalLength={13}
            arcLinkLabelsStraightLength={13}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={"#aaa"}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 4]],
            }}
            defs={[
              {
                id: "blocked",
                type: "patternDots",
                background: COLORS.blocked,
                color: COLORS.blocked,
                size: 6,
                padding: 3,
                stagger: true,
              },
              {
                id: "allowed",
                type: "patternDots",
                background: COLORS.allowed,
                color: COLORS.allowed,
                size: 6,
                padding: 3,
                stagger: true,
              },
              {
                id: "forwarded",
                type: "patternDots",
                background: COLORS.forwarded,
                color: COLORS.forwarded,
                size: 6, 
                padding: 3,
                stagger: true,
              },
              {
                id: "denied",
                type: "patternDots",
                background: COLORS.denied,
                color: COLORS.denied,
                size: 6,
                padding: 3,
                stagger: true,
              },
            ]}
            fill={[
              {
                match: {
                  id: "blocked",
                },
                id: "blocked",
              },
              {
                match: {
                  id: "allowed",
                },
                id: "allowed",
              },
              {
                match: {
                  id: "forwarded",
                },
                id: "forwarded",
              },
              {
                match: {
                  id: "denied",
                },
                id: "denied",
              },
            ]}
          />
        </div>
      </div>
      <AdditionalInfo
        onShowLogs={showLogs}
        totalNumber={totalTrafficEvents}
        text={"Yhteismäärä"}
      />
    </div>
  );
};
export default TrafficControlChart;
