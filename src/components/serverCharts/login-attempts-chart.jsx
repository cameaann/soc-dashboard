import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import serverDataService from "../../services/serverDataService";

const LoginAttemptsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    serverDataService.getLoginAttempts().then((res) => {
      setData(res);
    });
  }, []);

  const chartData = data.map((x) => {
    return {
      id: x.server,
      server: x.server,
      failed: x.failed,
      failedColor: "#FF7777",
      successed: x.successed,
      successedColor: "#694BDB",
    };
  });


  const theme = {
    axis: {
      ticks: {
        text: {
          fill: 'white' // Set axis label color to white
        }
      }
    },
    text: {
          fontSize: 11,
          fill: "#FFFFFF",
          color: "#FFFFFF",
          outlineColor: "#dfd3d3",
          fontFamily:"Gotham, sans serif"
        }
  };

  console.log(chartData);

  return (
    <div className="chart-container">
      <h3>Login attempts</h3>

      <ResponsiveBar
        theme={theme }
        data={data}
        keys={["successed", "failed"]}
        indexBy="server"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
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
  );
};

export default LoginAttemptsChart;
