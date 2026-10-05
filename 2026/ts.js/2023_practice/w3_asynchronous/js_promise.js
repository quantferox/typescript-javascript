/* let xPromise = new Promise((resolve, reject) => {
    let serverAnswer = {
        "server_сode": "200",
        "server_request_type": "GET",
        "server_time": "1678789421"
    };
    if (serverAnswer.server_сode == 200) {
        resolve(serverAnswer);
    }
    else {
        reject("Error! Server busy!");
    }
});

xPromise.then((data) => {
    if (data.server_сode == 200) {
        console.log("Successfully!Server code" + data.server_сode);
    }
}).catch((err) => {
    console.log(err);
}); */

/* //PROMISES USE EXAMPLE #1
let xPromise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://validate.jsontest.com/?json=[JSON-code-to-validate]", true);
    request.onload = () => {
        resolve(JSON.parse(request.responseText));
    };
    request.onerror = () => {
        reject({
            "status": request.status,
            "status_text": request.statusText
        });
    };
    request.send(undefined);
});

xPromise.then((value) => {
    return new Promise((resolve, reject) => {
        if (value.validate == true) {
            value.validate = false;
            resolve(value);
        }
    });
}, (err) => {
    console.log(err)
}).then((value) => {
    console.log(value);
});

//STATIC METHOD PROMISES
Promise.all([Promise1, Promise2, Promise3]);
//return new resolved Promise if all promise resolve or return reject if promise.count >= 1 is rejected

Promise.race([Promise1, Promise2, Promise3]);
//return first resolved promise or first reject */