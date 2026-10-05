"use strict";

/* const person = {
    name: "John",
    age: 30,
    city: "New York"
}; */

//Reverse Key & value;
/* let x = Object.fromEntries(Object.entries(person).map(function ([k, v]) { return [v, k] }));
console.log(x); */


//Displaying the Object Properties by name

/* console.log(person.name); */

//Displaying the Object Properties in a Loop

/* for(let prop in person){
    console.log(`Key: ${prop} | Value: ${person[prop]}`);
} */

//Displaying the Object using Object.values()

/* Object.keys(person).forEach((val,ind)=>{
    console.log(`Index ${ind} | Keys: ${val}`);
});

Object.values(person).forEach((val,ind)=>{
    console.log(`Index ${ind} | Value: ${val}`);
}); */

//Displaying the Object using JSON.stringify()

/* let strJson = JSON.stringify(person);
console.log(strJson); */