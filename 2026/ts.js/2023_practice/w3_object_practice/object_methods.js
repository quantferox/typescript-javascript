"use strict";

/* let btnJs = document.querySelector(".button-js");

function getThisElement(e){
    //e = onclick="getThisElement(this)"
    console.log(e);
} */

//**************************************************

//call(), apply(), and bind()

/* function personShow() {
    console.group("Person"); //group start
    console.log("First Name:", this.firstName); //group element
    console.log("Last Name:", this.lastName); //group element
    console.log("Username:", this.username); //group element
    console.log("Year:", this.year); //group element
    console.groupEnd(); //group end
}

let person = {
    "firstName": "Murad",
    "lastName": "Gazymagomedov",
    "username": "grad97",
    "year": "1997"
} */

//BIND & CALL & APPLY

/* personShow.bind(person,"arg1","arg2","arg3","arg4","arg5")();
personShow.call(person,"arg1","arg2","arg3","arg4","arg5");
personShow.apply(person,["arg1","arg2","arg3","arg4","arg5"]); */

//**************************************************

/* let obj_auto = {
    "brand": "Mercedes-Benz",
    "model": "S450",
    "showFullName": function(){
        return `${this.brand} ${this.model}`;
    }
};

//showFullName -> Method
console.log(obj_auto.showFullName())
 */

/* console.group("Person"); //Opened Group
console.groupCollapsed("Person"); //Closed Group
console.log("FirstName:","Murad");
console.groupEnd(); */

//**************************************************

//UpperCase & LowerCase
/* let x = "Hello World";

let xUpperCase = x.toUpperCase();
let xLowerCase = x.toLowerCase();

console.log(xUpperCase);
console.log(xLowerCase); */
