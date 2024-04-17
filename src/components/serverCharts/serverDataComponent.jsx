import LoginAttemptsChart from "./login-attempts-chart";

const ServerDataComponent = (props) => {

  return (
    <div className="component-container">
    <h3>Palvelimet</h3>
      <LoginAttemptsChart time={props} />
    </div>
  );
};

export default ServerDataComponent;
