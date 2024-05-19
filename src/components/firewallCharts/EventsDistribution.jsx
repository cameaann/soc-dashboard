import { ResponsivePie } from "@nivo/pie";
import AdditionalInfo from "../AdditionalInfo";
import { useNavigate } from "react-router-dom";
import { THEME, COLORS } from "../../../constants";
import { getEventDistribution } from "../../services/firewallDataService";

const EventsDistribution = ({ events, time, loading }) => {
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
      {loading && <span className="loader"></span>}
      <div className="chart pie" onClick={showLogs}>
        <h4 className="chart-heading">Palomuuritapahtumien jakaantuminen</h4>
        <div className="pie-chart">
          <ResponsivePie
            theme={THEME}
            margin={{ top: 20, right: 10, bottom: 20, left: 0 }}
            arcLinkLabelsDiagonalLength={13}
            arcLinkLabelsStraightLength={13}
            padding={0.3}
            data={filteredEvents}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextOffset={6}
            arcLinkLabelsTextColor="#FFFFFF"
            arcLinkLabelsOffset={-8}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={"#aaa"}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 4]],
            }}
            padAngle={0.2}
            cornerRadius={4}
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
                id: "detected",
                type: "patternDots",
                background: COLORS.detected,
                color: COLORS.detected,
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
                  id: "detected",
                },
                id: "detected",
              },
            ]}
          />
        </div>
      </div>
      <AdditionalInfo
        onShowLogs={showLogs}
        totalNumber={total}
        text={"Yhteismäärä"}
      />
    </div>
  );
};

export default EventsDistribution;
