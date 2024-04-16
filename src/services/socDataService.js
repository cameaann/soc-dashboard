import axios from "axios";

const serverDataUrl = "https://app-soc-data-server.wonderfulcliff-356171e4.northeurope.azurecontainerapps.io/dynlogs/palvelin"
const firewallDataUrl = "";


const getServerData = async () =>{
    const res = await axios.get(serverDataUrl);
    return res.data;
}

const getLogsData = async (info, data, timePeriod) => {
    console.log(info, data, timePeriod);
    if(info === "server"){
        const res = await axios.get(serverDataUrl);
        const groupedArray = Object.groupBy(res.data, ({server_name}) => server_name)
        if(data === "login-attempts"){
            let loginAttempts = Object.entries(groupedArray)
                .map(x =>{
                   console.log(x);
                  let sortArr = x[1].filter(el => el.event_type ==="login")
                  return sortArr
                })
                console.log(loginAttempts);
                return loginAttempts;
        }
    }
    if(info === "firewall"){
        const res = await axios.get(firewallDataUrl);
    }
}

export { getServerData, getLogsData }