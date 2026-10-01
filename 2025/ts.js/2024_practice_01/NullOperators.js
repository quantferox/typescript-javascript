/* let x = null;
let y = undefined;

const z = 4;

console.log(x??z);
console.log(y??z); */


/* let x = null;
let y = undefined;

x ??= 4;
y ??= 5;

console.log(x);
console.log(y); */

/* LEGACY CODE */
//let num1 = 10,
//    num2 = 20,
//    result;
//
//if (result === null || result === undefined) {
//  if (num1 !== null && num1 !== undefined) {
//    result = num1;
//  } else {
//    result = num2;
//  }
//}


/* NEW CODE */
/* let num1 = 10,
    num2 = 20,
    result;
result ??= num1 ?? num2; */