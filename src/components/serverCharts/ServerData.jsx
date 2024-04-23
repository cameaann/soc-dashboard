import LoginAttemptsChart from "./LoginAttemptsChart";

const ServerData = ({ filter }) => {
  console.log(filter);
  return (
    <div className="component-container">
      <h3>Palvelimet</h3>
      <LoginAttemptsChart time={filter} />
    </div>
  );
};

export default ServerData;
