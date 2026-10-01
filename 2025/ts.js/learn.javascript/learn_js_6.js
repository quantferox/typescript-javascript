/* const user = {
    id: 1,
    firstName: "Murad",
    lastName: "Gazymagomedov",
} */
/* 
const second_user = user; // user object not copy only link (linked user or user object link or user object pointer)

//changed user
second_user.firstName = "Hacker"; // :D

console.log(user.firstName);
console.log(second_user.firstName); */

//for surface copy use Object.assing

/* const third_user = Object.assign({}, user);

third_user.firstName = "Hacker"; // :D

console.log(user.firstName);
console.log(third_user.firstName); */


/* const user = {
    id: 1,
    first_name: "Murad",
    last_name: "Gazymagomedov",
    address:{
        street: "Hazi Aslanov m.Station",
        city: "Baku",
    }
} */

/* const user = {};

console.log(user?.address?.city) */

// old? functional constructor
/* function User(name){
    this.name = name;
}

const user = new User("Murad");
console.log(user); */

/* class MyClass{
    constructor(message){
        this.code = message;
    }
}

class MyCustomClass extends MyClass{
    constructor(message){
        super(message);
        this.driver = "";
    }
}

console.log(new MyCustomClass("hi").code) */

/* function test(){
    throw new SyntaxError("syntax error ^_^");
}

test(); */

/* try{
    throw new Error("Error!");
}
finally{
    console.log("Executed!");
} */