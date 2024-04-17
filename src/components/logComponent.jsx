import dayjs from 'dayjs'

const Log = ({ log, serviceType, logsName }) => {

let date = dayjs(log.timestamp).format("DD-MM-YYYY")
let time = dayjs(log.timestamp).format("HH:MM")


if(serviceType === "server" && logsName === "login-attempts"){
    return (
        <li className="log">
          Käyttäjä <span className="user">{log.username}</span> kirjautui palvelimelle <span className="service">{log.server_name}</span>
          {log.status === "success" ? " onnistuneesti" : " epäonnistuneesti"} <span className="date"> {date} </span>klo{" "}
          <span className="time">{time}</span>
        </li>
      );
}
if(serviceType === "server" && logsName === "updates"){
    return (
        <li className="log">
          Palvelimella {log.server_name} asennettiin päivitys {log.update_name}
          {log.status === "success" ? " onnistuneesti" : " epäonnistuneesti"} <span className="date"> {date} </span>klo{" "}
          {time}
        </li>
      );
}
  
};
export default Log;
