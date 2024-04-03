import axios from "axios";

const serverDataUrl = "https://raw.githubusercontent.com/bc-web-ohjelmistokehitys/soc_data/main/palvelin_mock.json";

const getData = () =>{
    const promise = axios.get(serverDataUrl);
    console.log(promise);
    return promise.then(res => res.data)
    

}

export default { getData }