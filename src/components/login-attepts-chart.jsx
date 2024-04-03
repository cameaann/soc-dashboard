import { ResponsivePie } from "@nivo/pie";
import loginAttemptChartService from "../services/loginAttemptChartService";
import { useEffect, useState } from "react";

const LoginAttemptsChart = () => {
  const [data, setData] = useState([]);

  let loginAttempts = {
    failed: 0,
    successed: 0,
  };

  useEffect(() => {
    loginAttemptChartService.getData().then((response) => {
      setData(response);
    });
  }, []);

  loginAttempts = data.reduce((y, x) => {
    if (x.status === "success") {
      y.successed++;
    }
    if (x.status === "failed") {
      y.failed++;
    }
    return y;
  }, loginAttempts);

  console.log(loginAttempts);
  
  const chartData = [
    {
      id: "failed",
      label: "epäonnistuneet",
      value: loginAttempts.failed,
      color: "hsl(90, 70%, 50%)",
    },
    {
      id: "successed",
      label: "onnistuneet",
      value: loginAttempts.successed,
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
