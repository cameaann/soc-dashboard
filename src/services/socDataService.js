import axios from "axios";

// const serverDataUrl = "https://raw.githubusercontent.com/bc-web-ohjelmistokehitys/soc_data/main/palvelin_mock.json";
const serverDataUrl = "https://soc-mock-server.yellowmeadow-5ebf02da.northeurope.azurecontainerapps.io/dynlogs/palvelin"


const getServerData = async () =>{
    const res = await axios.get(serverDataUrl);
    return res.data;
}

export { getServerData }