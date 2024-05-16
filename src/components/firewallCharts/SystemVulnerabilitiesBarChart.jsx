import { ResponsiveBar } from "@nivo/bar";
import AdditionalInfo from "../AdditionalInfo";
import { useNavigate } from "react-router-dom";
import { THEME } from "../../../constants";
import { getSystemVulnerabilities } from "../../services/firewallDataService";

const SystemVulnerabilitiesBarChart = ({ events, time, loading }) => {
  const navigate = useNavigate();
  const filteredEvents = getSystemVulnerabilities(events, time);
  const total = filteredEvents.reduce((acc, item) => acc + item.value, 0);

  const showLogs = () => {
    navigate(
      "/logs?service=firewall&logs-name=system-vulnerabilities&log-name=detected"
    );
  };

  return (
    <div className="chart-container">
      {loading && <span className="loader"></span>}
      <div className="chart" onClick={showLogs}>
        <h4 className="chart-heading">System Vulnerabilities Chart</h4>
        <ResponsiveBar
          theme={THEME}
          data={filteredEvents}
          keys={["value"]}
          indexBy="id"
          margin={{ top: 50, right: 50, bottom: 80, left: 30 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={["#694BDB", "#FF7777"]}
          borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
          axisBottom={{
            legend: "Source IP",
            legendPosition: "middle",
            legendOffset: 40,
          }}
          axisLeft={{
            tickSize: 1,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Count",
            legendPosition: "end",
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="white"
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-left",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 50,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolShape: "circle",
              symbolSize: 10,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <AdditionalInfo
        onShowLogs={showLogs}
        totalNumber={total}
        text={"Total detected"}
      />
    </div>
  );
};

export default SystemVulnerabilitiesBarChart;
