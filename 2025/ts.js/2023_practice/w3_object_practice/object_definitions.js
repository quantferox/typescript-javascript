"use strict";

/*W3 SCHOOL OBJECT-DEFINITIONS PRACTICE*/

/* let obj_auto = {
    "brand": "Mercedes-Benz",
    "model": "S450",
    "engine": "V8 Petrol / Hybrid",
    "color": "Black",
    "price": "65000"
};

let obj_auto_json = JSON.stringify(obj_auto);

console.log(typeof obj_auto);
console.log(typeof obj_auto_json); */

//*******************************************************

//CONST OBJECT

/* const dynamic_obj = {
    "brand": "Mercedes"
};
console.log(dynamic_obj.brand);

dynamic_obj.brand = "BMW";
console.log(dynamic_obj.brand); */

//**************************************************

//CREATE OBJECT

/* const obj_1 = {};
const obj_2 = new Object();

function obj_3_constructor(model,brand){
    this.model = model;
    this.brand = brand;
}

const obj_3 = new obj_3_constructor("BMW","M5");

const obj_4 = Object.create(obj_3,{
    "test":{
        value: "testValue",
        enumerable: false,
        configurable: true,
        writable: true,
    },
    "test1":{
        value: "testValue",
        enumerable: false,
        configurable: true,
        writable: true,
    }
});
console.log(`${obj_4.test} , ${obj_4.test1} , ${obj_4.brand} , ${obj_4.model}`); */

//**************************************************

/* const person = {};

person.firstName = "Murad";
person.userName = "gmurad97";
person.birthYear = 1997; */