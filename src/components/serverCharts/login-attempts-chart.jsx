import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import serverDataService from "../../services/serverDataService";
import AdditionalInfo from "../additionalInfoComponent";

const LoginAttemptsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    serverDataService.getLoginAttempts().then((res) => {
      setData(res);
    });
  }, []);

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

  console.log(data);

  const totalAttempts = data.reduce((sum, x)=>{
    sum += x.failed + x.successed
    return sum
  }, 0)


  const showLogs = () => {
    console.log("here should be logs");
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
          margin={{ top: 50, right: 50, bottom: 80, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={["#694BDB", "#FF7777"]}
          // borderColor={"#FFFFFF"}
          borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "login attempts",
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
              symbolShape: 'circle',
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
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            `${e.id}: Successed - ${e.data.successed}, Failed - ${e.data.failed}`
          }
        />
      </div>
      <AdditionalInfo onShowLogs = {showLogs} totalNumber = {totalAttempts} />
   
    </div>
  );
};

export default LoginAttemptsChart;
