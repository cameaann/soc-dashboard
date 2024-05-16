import { ResponsivePie } from "@nivo/pie";
import AdditionalInfo from "../AdditionalInfo";
import { useNavigate } from "react-router-dom";
import { THEME } from "../../../constants";
import { getEventDistribution } from "../../services/firewallDataService";

const EventsDistribution = ({ events, time }) => {
  const navigate = useNavigate();
  const filteredEvents = getEventDistribution(events, time);
  const total = filteredEvents.reduce((acc, item) => acc + item.value, 0);

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
            keys={["blocked", "allowed", "detected"]}
            margin={{ top: 20, right: 10, bottom: 20, left: 0 }}
            arcLinkLabelsDiagonalLength={13}
            arcLinkLabelsStraightLength={13}
            padding={0.3}
            data={filteredEvents}
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
            padAngle={0.2}
            cornerRadius={4}
            colors={["#FF7777", "#694BDB", "#f1e15b"]}
          />
        </div>
      </div>
      <AdditionalInfo
        onShowLogs={showLogs}
        totalNumber={total}
        text={"Total events"}
      />
    </div>
  );
};

export default EventsDistribution;
