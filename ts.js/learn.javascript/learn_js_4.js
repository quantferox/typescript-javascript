/* let first_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("complete first_promise");
    }, 2048);
}); */

/* let second_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("complete first_promise");
    }, 2048);
}); */

/* Promise.race([first_promise, second_promise]).then(function(result){
    console.log(result);
}); // the first is the fastest completed promise */

/* Promise.all([first_promise, second_promise]).then(function(result){
    console.log(result);
}); //Wait for all the promises to be fulfilled */

/* Promise.any([first_promise, second_promise]).then(function(result){
    console.log(result);
}); //the first successful promise */

/* Promise.allSettled([first_promise, second_promise]).then(function(result){
    console.log(result);
}); //fulfillment of all promises */

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1024);
}).then((result) => {
    console.log("first then result " + result);
    return result * 2; // Return Promise
}).then((result) => {
    console.log("second then result " + result);
    return result * 2; // Return Promise
}).then((result) => {
    console.log("third then result " + result);
}); */

/* new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Error!");
    }, 1000);
}).catch(alert); // catch will not be executed */