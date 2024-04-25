import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import serverDataService from "../../services/serverDataService";
import AdditionalInfo from "../AdditionalInfo";


const LoginAttemptsChart = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const { time } = { ...props };

  useEffect(() => {
    serverDataService.getLoginAttempts(time).then((res) => {
      setData(res);
    });
  }, [time]);

  const theme = {
    axis: {
      ticks: {
        text: {
          fill: "white", // Set axis label color to white
        },
      },
    },
    text: {
      fontSize: 11,
      fill: "#FFFFFF",
      color: "#FFFFFF",
      outlineColor: "#dfd3d3",
      fontFamily: "Gotham, sans serif",
    },
  };

  const totalAttempts = data.reduce((sum, x) => {
    sum += x.failed + x.successed;
    return sum;
  }, 0);

  const showLogs = () => {
    navigate(`/logs?service=server&logs-name=login-attempts`);

  };

  return (
    <div className="chart-container">
      <div className="chart">
        <h4 className="chart-heading">Login attempts</h4>
        <ResponsiveBar
          theme={theme}
          data={data}
          keys={["successed", "failed"]}
          indexBy="server"
          margin={{ top: 50, right: 50, bottom: 80, left: 30 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={["#694BDB", "#FF7777"]}
          borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
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

          barAriaLabel={(e) =>
            `${e.id}: Successed - ${e.data.successed}, Failed - ${e.data.failed}`
          }
        />
      </div>
      <AdditionalInfo onShowLogs={showLogs} totalNumber={totalAttempts} />
    </div>
  );
};

export default LoginAttemptsChart;
