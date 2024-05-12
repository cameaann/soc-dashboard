import dayjs from "dayjs";

const LogRecord = ({ log, serviceType, logsName }) => {
  let date = dayjs(log.timestamp).format("DD-MM-YYYY");
  let time = dayjs(log.timestamp).format("HH:MM");

  if (serviceType === "server" && logsName === "login-attempts") {
    return (
      <li className="log">
        Käyttäjä <span className="user">{log.username}</span> kirjautui
        palvelimelle <span className="service">{log.server_name}</span>
        {log.status === "success" ? " onnistuneesti" : " epäonnistuneesti"}{" "}
        <span className="date"> {date} </span>klo{" "}
        <span className="time">{time}</span>
      </li>
    );
  }
  if (serviceType === "server" && logsName === "updates") {
    return (
      <li className="log">
        Palvelimella {log.server_name} asennettiin päivitys {log.update_name}
        {log.status === "success" ? " onnistuneesti" : " epäonnistuneesti"}{" "}
        <span className="date"> {date} </span>klo {time}
      </li>
    );
  }
  if (serviceType === "firewall" && logsName === "firewall-distribution") {
    return (
      <li className="log">
        Palamuuri {formatRouterTrafficlog(log.action)} yhteydenoton IP-osoitteesta {log.destination_ip}{" "}
        porttiin {log.destination_port} ({log.protocol}){" "}
        <span className="date"> {date} </span>klo {time}
      </li>
    );
  }
  if (serviceType === "router" && logsName === "trafficControl") {
    return (
      <li className="log">
        Reititin {formatRouterTrafficlog(log.action)} liikennettä IP-osoitteesta {log.source_ip}{" "}
        verkkoosoitteeseen {log.destination_ip} ({log.protocol}){" "}
        <span className="date"> {date} </span>klo {time}
      </li>
    );
  }
};

const formatRouterTrafficlog = (str)=>{
  if(str==="forwarded"){
    return "ohjasi";
  }
  else if(str==="allowed"){
    return "salli";
  }
  else if(str==="blocked"){
    return "esti";
  }
  else if(str==="denied"){
    return "kielsi"
  }
}
export default LogRecord;
