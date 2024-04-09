import { getServerData } from "./socDataService";

const getLoginAttempts = () => {
  const data = getServerData().then((res) => {
    console.log(res);

    const groupedArray = Object.groupBy(res, ({server_name}) => server_name)
    console.log(groupedArray)

    let loginAttempts = Object.entries(groupedArray)
        .map(x => {
            let emp = {
                failed: 0,
                successed: 0,
                server: x[0]
            }
            x[1].reduce((acc, el)=> {
                if (el.event_type==="login" && el.status === "success" ) {
                    acc.successed++;
                }
                if (el.event_type==="login" && el.status === "failed") {
                    acc.failed++;
                }
                return acc
            }, emp)
            return emp
        })
        .filter(emp => emp.successed + emp.failed > 0)
  
    console.log(loginAttempts);
    return loginAttempts
   
  });
  return data;
};


export default { getLoginAttempts };
