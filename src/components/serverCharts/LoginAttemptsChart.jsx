import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import serverDataService from "../../services/serverDataService";
import AdditionalInfo from "../AdditionalInfo";
import { THEME } from "../../../constants";

const LoginAttemptsChart = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { time } = { ...props };

  useEffect(() => {
    try {
      serverDataService.getLoginAttempts(time).then((res) => {
        setData(res);
        setLoading(false);
      });
    } catch (error) {
      console.error();
    }
  }, [time]);

  const totalAttempts = data.reduce((sum, x) => {
    sum += x.failed + x.successed;
    return sum;
  }, 0);

  const showLogs = () => {
    navigate(`/logs?service=server&logs-name=login-attempts`);
  };

  return (
    <div className="chart-container">
      {loading && <span className="loader"></span>}
      <div className="chart" onClick={showLogs}>
        <h4 className="chart-heading">Login attempts</h4>
        <ResponsiveBar
          theme={THEME}
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
            tickPadding: 8,
            tickRotation: 0,
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
            `Successed - ${e.data.successed}, Failed - ${e.data.failed}:${e.id} `
          }
        />
      </div>
      <AdditionalInfo
        onShowLogs={showLogs}
        totalNumber={totalAttempts}
        text={"Total login attemps"}
      />
    </div>
  );
};

export default LoginAttemptsChart;
