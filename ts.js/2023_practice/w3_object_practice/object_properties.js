"use strict";

//W3 SCHOOL OBJECT PROPERTIES

/* let turbo_obj = {
    "brand": "Toyota",
    "model": "Camry",
    "engine": "3.5 Petrol | Hybrid",
    "price": "41500"
}

console.log(turbo_obj.brand);
console.log(turbo_obj["brand"]);
console.log(turbo_obj[expression]); */

//**************************************************

/* let turbo_obj = {
    "brand": "Toyota",
    "model": "Camry",
    "engine": "3.5 Petrol | Hybrid",
    "price": "41500"
}

for(let xName in turbo_obj){
    console.log(xName); //show key
    console.log(turbo_obj[xName]); //show value
}

for(let xName of turbo_obj){
    console.log(xName); //Error! turbo_obj is not iterable
}

Object.keys(turbo_obj).forEach(function(v){
    console.log(v);
});

Object.values(turbo_obj).forEach(function(v){
    console.log(v);
});

turbo_obj.color = "Black Cosmic";
console.log(turbo_obj);

delete turbo_obj.brand;
delete turbo_obj["brand"];
delete turbo_obj[expression];

console.log(turbo_obj); */

//**************************************************

/* let auto_obj = {
    "Mercedes":{
        "model": "E350",
        "engine":"3.5 Petrol",
        "color":"Black"
    },
    "Toyota":{
        "model": "Camry",
        "engine":"3.5 Petrol",
        "color":"Black"
    }
}; */

/* console.log(auto_obj.Toyota.model);
console.log(auto_obj["Toyota"]["model"]);
console.log(auto_obj.Toyota["model"]);

Object.keys(auto_obj).forEach(function(v){
    console.log(v);
});

for(let xName in auto_obj){
    for(let xModel in auto_obj[xName]){
        if(xModel === "model"){
            console.log(auto_obj[xName][xModel])
        }
    }
} */

//**************************************************

//NESTED ARRAYS & OBJECTS

/* let person = {
    "firstName": "Murad",
    "lastName": "Gazymagomedov",
    "username": "gmurad97",
    "cars": [
        {
            "carBrand":"Mercedes",
            "carModel":"S450",
            "carEngine":"3.0 Petrol | Hybrid",
            "carColor":"Black Cosmic"
        },
        {
            "carBrand":"Toyota",
            "carModel":"Camry",
            "carEngine":"2.5 Petrol | Hybrid",
            "carColor":"White"
        },
        {
            "carBrand":"Ford",
            "carModel":"Fusion USA",
            "carEngine":"2.0 Petrol | Hybrid",
            "carColor":"Obsidian"
        }
    ]
};

console.log(person.cars[0].carBrand);
console.log(person.cars[0].carModel);
console.log(person.cars[0].carEngine);
console.log(person.cars[0].carColor);


for(let cars in person.cars){
    console.log(person.cars[cars]); //show all person cars
} */

