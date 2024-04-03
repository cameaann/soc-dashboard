import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import serverDataService from "../../services/serverDataService";

const LoginAttemptsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    serverDataService.getLoginAttempts().then((res) => {
      setData(res);
    });
  }, []);

  const chartData = [
    {
      id: "failed",
      label: "epäonnistuneet",
      value: data.failed,
      color: "hsl(90, 70%, 50%)",
    },
    {
      id: "successed",
      label: "onnistuneet",
      value: data.successed,
      color: "hsl(56, 70%, 50%)",
    },
  ];

  return (
    <div className="chart-container">
      <h3>Login attempts</h3>
      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      />
    </div>
  );
};

export default LoginAttemptsChart;
