import dayjs from "dayjs";

const LogRecord = ({ log, serviceType, logsName }) => {
  let date = dayjs(log.timestamp).format("DD-MM-YYYY");
  let time = dayjs(log.timestamp).format("HH:mm:ss");

  if (serviceType === "server" && logsName === "login-attempts") {
    return (
      <li className="log">
        Käyttäjä <span className="pink">{log.username}</span> kirjautui
        palvelimelle <span className="blue">{log.server_name}</span>
        {log.status === "success" ? " onnistuneesti" : " epäonnistuneesti"}{" "}
        <span className="red"> {date} </span>klo{" "}
        <span className="red">{time}</span>
      </li>
    );
  }
  if (serviceType === "server" && logsName === "updates") {
    return (
      <li className="log">
        Palvelimella {log.server_name} asennettiin päivitys {log.update_name}
        {log.status === "success" ? " onnistuneesti" : " epäonnistuneesti"}{" "}
        <span className="red"> {date} </span>klo {time}
      </li>
    );
  }
  if (serviceType === "firewall" && logsName === "firewall-distribution") {
    return (
      <li className="log">
        Palamuuri <span className="blue">{formatLog(log.action)}</span>{" "}
        yhteydenoton IP-osoitteesta {log.destination_ip} porttiin{" "}
        {log.destination_port} ({log.protocol}){" "}
        <span className="red"> {date} </span>klo {time}
      </li>
    );
  }
  if (
    serviceType === "firewall" &&
    logsName === "system-vulnerabilities" &&
    log.action === "detected"
  ) {
    return (
      <li className="log">
        Palamuuri havaittiin suuren määrän ({log.protocol}
        {", "}
        {log.description}) IP-osoitteesta {log.destination_ip}{" "}
        <span className="red"> {date} </span>klo {time}
      </li>
    );
  }
  if (serviceType === "router" && logsName === "traffic-control") {
    return (
      <li className="log">
        Reititin <span className="blue">{formatLog(log.action)} </span>
        liikennettä IP-osoitteesta <span className="pink">
          {log.source_ip}
        </span>{" "}
        verkkoosoitteeseen {log.destination_ip} ({log.protocol}){" "}
        <span className="red"> {date} </span>klo {time}
      </li>
    );
  }
  if (serviceType === "router" && logsName === "attack-type" && log.protocol) {
    return (
      <li className="log">
        Reitittimeen hyökättiin <span className="blue">{log.attack_type} </span>
        protokollalla <span className="pink">{log.protocol}</span>{" "}
        <span className="red">{date}</span> klo {time}
      </li>
    );
  }
};

const formatLog = (str) => {
  if (str === "forwarded") {
    return "ohjasi";
  } else if (str === "allowed") {
    return "salli";
  } else if (str === "blocked") {
    return "esti";
  } else if (str === "denied") {
    return "kielsi";
  }
};
export default LogRecord;
