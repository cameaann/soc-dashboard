import { ResponsivePie } from "@nivo/pie";

const LoginAttemptsChart = () => {
  const loginAttempts = {
    failed: 12,
    successed: 34
  };
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
    }
  ];

  return (
    <div style={{height: "300px", width: "300px"}}>
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
