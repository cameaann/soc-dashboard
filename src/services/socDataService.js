import axios from "axios";

const serverDataUrl = "https://raw.githubusercontent.com/bc-web-ohjelmistokehitys/soc_data/main/palvelin_mock.json";


const getServerData = () =>{
    const promise = axios.get(serverDataUrl);
    return promise.then(res => res.data) 
}

export { getServerData }