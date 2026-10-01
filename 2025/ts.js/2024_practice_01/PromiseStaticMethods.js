/* Promise.all && Promise.race && Promise.any */

//Promise.race

/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("first promise"), 500);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("second promise"), 100);
})

Promise.race([promise1, promise2]).then(value => console.log(value)); */
//result console.log === "second promise"



//Promise.all

/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("first promise resolved"), 500);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("second promise resolved"), 400);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("third promise resolved"), 300);
}) */

/* const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("fourth promise rejected"), 50);
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("fifth promise rejected"), 120);
})
 */
/* Promise.all([promise1, promise2, promise3, promise4, promise5])
.then((value) => console.log(value)).catch((error) => console.log(error)) */


//Promise.any

/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'first error');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, 'second error');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 300, 'third error');
});

Promise.any([promise1, promise2, promise3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error.errors);
    }); */