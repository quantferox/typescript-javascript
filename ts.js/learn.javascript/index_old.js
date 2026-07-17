// function sum(a) {
//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.toString = function () {
//         return currentSum;
//     }

//     return f;
// }

// const sum = (...args) =>{
//     return (...moreArgs) => {
//         if (moreArgs.length === 0)
//             return args.reduce((acc,num) => acc+num, 0);
//         return sum(...args, ...moreArgs);
//     };
// }

// console.log(sum(1)(2)); // 3
// console.log(sum(5)(-1)(2)); // 6
// console.log(sum(6)(-1)(-2)(-3)); // 0
// console.log(sum(0)(1)(2)(3)(4)(5)); // 15



// function makeCounter() {
//     let count = 0;

//     function counter() {
//         return count++;
//     }

//     counter.set = value => count = value;

//     counter.decrease = () => count--;

//     return counter;
// }

// Array.prototype.findUnique = function () {
//     const result = [];

//     for (let x = 0; x < this.length; x++) {
//         let count = 0;
//         for (let y = 0; y < this.length; y++) {
//             if (this[x] === this[y]) {
//                 count++;
//             }
//         }
//         if(count === 1)
//             result.push(this[x]);
//     }

//     return result;
// }


// const unique = [10, 5, 10, 0, 6, 6, 7, 2, 9, 9].findUnique(); //5, 0, 7, 2
// console.log(unique)


/* function countOccurences(arr) {
    const list = new Map();
    arr.forEach((el) => {
        if (!list.has(el)) {
            const count = arr.filter(elm => elm === el).length;
            list.set(el, count);
        }
    });
    return Object.fromEntries(list);
} */

/* function countOccurences(arr) {
    const list = {};
    arr.forEach((el) => {
        if(!list[el]){
            const count = arr.filter(elm => elm === el).length;
            list[el] = count;
        }
    });
    return list;
} */


/* console.log(countOccurences([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3} */


/* EVENT LOOP */
/* console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0); */

// 1 6 3 5 2 4 7

//################################################

// const add = (...nums) => {
//     return (...moreNums) => moreNums.length ? add(...nums, ...moreNums) : nums.reduce((acc,num) => acc + num, 0);
// }


// console.log(add(1)(2)(3)());
// console.log(add(1)(2)());
// console.log(add(1)());

// function log(...args){
//     console.log(args[0], args[1]);
// }

// //limit closures
// const closure = (callback) => {
//     let limit = 3;

//     return {
//         resetLimit: function(){
//             limit = 3;
//         },
//         call: function(...args){
//             if(limit > 0){
//                 limit--;
//                 callback(...args);
//             }
//             else{
//                 console.log("Превышен лимит выполнения!");
//             }
//         }
//     }
// }

// const limitedLog = closure(log);

// limitedLog.call("Hello", "World"); // Выведет: Hello World
// limitedLog.call("Test", 123);      // Выведет: Test 123
// limitedLog.call("Another", "call"); // Выведет: Another call
// limitedLog.call("Should", "Fail");  // Выведет: Превышен лимит вызовов!

// limitedLog.resetLimit();  // Сброс лимита
// limitedLog.call("Works", "Again"); // Выведет: Works Again
