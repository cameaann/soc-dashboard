import { getServerData } from "./socDataService";

const getLoginAttempts = () => {
    const data = getServerData().then(res => {
        console.log(res);

        let loginAttempts = {
            failed: 0,
            successed: 0,
          };
    
        loginAttempts = res.reduce((y, x) => {
            if (x.status === "success") {
              y.successed++;
            }
            if (x.status === "failed") {
              y.failed++;
            }
            return y;
          }, loginAttempts);
    
          return loginAttempts;
    })
    return data;
}


export default { getLoginAttempts }