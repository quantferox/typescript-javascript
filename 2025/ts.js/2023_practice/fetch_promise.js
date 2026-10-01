/* let url = "http://httpbin.org/get";
let fetchData = fetch(url,{
    method: "GET"
}).then((responseData)=>{
    return responseData.json();
}).then((response)=>{
    console.log(response.headers["User-Agent"]);
}); */

/* let url = "http://httpbin.org/get";
async function promisibleData() {
    return await new Promise((resolve, reject) => {
        return fetch(url, {
            method: "GET"
        }).then((responseData) => {
            if (responseData.status == "200") {
                //resolve("Promise Resolved!");
                resolve(responseData.json());
            }
            else {
                //reject("Promise Rejected!");
                reject(responseData.json());
            }
        })
    });
}

promisibleData().then((resolve) => {
    console.log(resolve);
}) */