import { ResponsivePie } from "@nivo/pie";
import AdditionalInfo from "../AdditionalInfo";
import { useNavigate } from "react-router-dom";
import { THEME } from "../../../constants";

const EventsDistribution = ({ events }) => {
  const navigate = useNavigate();

  const total = events.reduce((acc, item) => acc + item.value, 0);

  const showLogs = () => {
    navigate(
      "/logs?service=firewall&logs-name=firewall-distribution&time=5min"
    );
  };

  return (
    <div className="chart-container">
      <div className="chart pie" onClick={showLogs}>
      <h4 className="chart-heading">Firewall events distribution</h4>
        <div className="pie-chart">
          <ResponsivePie
            theme={THEME}
            margin={{ top: 20, right: 10, bottom: 20, left: 0 }}
            arcLinkLabelsDiagonalLength={13}
            arcLinkLabelsStraightLength={13}
            padding={0.3}
            data={events}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextOffset={8}
            arcLinkLabelsTextColor="#FFFFFF"
            arcLinkLabelsOffset={-8}
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
      <AdditionalInfo onShowLogs={showLogs} totalNumber={total} text={"Total events"} />
    </div>
  );
};

export default EventsDistribution;
