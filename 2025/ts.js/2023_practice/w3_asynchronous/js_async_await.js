/* async function myFunction() {
    return "Hello";
}

myFunction().then((value) =>{
    console.log(value);
}) */


// NOTE: async function myFunction() == function myFunction()

/* function myFunction() {
    return Promise.resolve("Hello");
}

myFunction().then((value) =>{
    console.log(value);
}) */


/* async function getServerAnswer() {
    let xPromise = new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipapi.co/8.8.8.8/json/", true);
        xhr.onload = () => {
            if (xhr.status == 200) {
                resolve(xhr.response);
            }
            else {
                resolve("Error! 404 Not Found!")
            }
        };
        xhr.send(undefined);
    });
    console.log(await xPromise);
}

getServerAnswer() */