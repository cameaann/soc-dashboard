import { useEffect, useState } from "react";
import { getLogsData } from "../services/socDataService";
import { useSearchParams } from "react-router-dom";

const LogsComponent = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();

  useEffect(() => {
    const filter1 = searchParams.get("info");
    const filter2 = searchParams.get("data");
    const timePeriod = searchParams.get("time");
    getLogsData(filter1, filter2, timePeriod).then((res) => {
      setData(res);
    });
  }, [searchParams]);

  let listItems;
    if(data){
        listItems = data.map(server => {
            return server.map(attempt => <li className="log" key={attempt.id}>Käyttäjä {attempt.username} kirjautui palvelimelle {attempt.server_name} {attempt.status === "success"? "onnistuneesti": "epäonnistuneesti"} klo {attempt.timestamp}</li>)
        } 
      );
    }

const formatString = (val)=>{
    let fStr= val.split("-").join(" ");
    return fStr;
}

  console.log(data);

  return (
    <div>
     <h2 className="main-heading">{formatString(searchParams.get("data"))} logs</h2>

     <ul>{listItems}</ul>
      
    </div>
  );
};
export default LogsComponent;
