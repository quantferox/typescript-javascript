//OBJECT REFERENCE

/* let auto_obj = {
    "brand": "Mercedes-Benz",
    "model": "S500",
    "price": "$125000",
}; */

// Create object with an existing object as prototype

/* let n = Object.create(auto_obj,{
    color:{
        writable:false, //if writable then you can change the value
        enumerable:false, // enumerable
        configurable:true, // configure
        value: "red" // object value
    },
    engine:{
        writable:false,
        configurable:false,
        enumerable:false,
        value: "4.0 v8 Engine Benzin | Hybrid"
    }
});

console.log(`${n.brand} ${n.model} ${n.engine} - x ${n.color} | ${n.price}`); */

//Adding or changing an object property

/* let def_obj = Object.defineProperty(auto_obj,"color",{
    writable:false, //if writable then you can change the value
    enumerable:false, // enumerable
    configurable:true, // configure
    value: "red" // object value
});

console.log(def_obj); */

//Adding or changing object properties

/* let def_props = Object.defineProperties(auto_obj,{
    color:{
        value: "gray",
        writable:true,
        enumerable:false,
        configurable: false
    },
    engine:{
        value: "4.0 v8 Engine | Hybrid",
        writable:true,
        enumerable:false,
        configurable: false
    }
});

console.log(def_props); */

// Accessing Properties

/* let get_own_prop_obj = Object.getOwnPropertyDescriptor(auto_obj,"brand");

console.log(get_own_prop_obj); */

// Returns all properties as an array

/* let get_own_prop_names = Object.getOwnPropertyNames(auto_obj);

console.log(get_own_prop_names); */

// Accessing the prototype

/* let proto_obj = Object.create(auto_obj);

console.log(Object.getPrototypeOf(proto_obj) == auto_obj ? true : false); */


// Returns enumerable properties as an array

/* console.log(Object.keys(auto_obj)); */



// Prevents adding properties to an object

/* Object.preventExtensions(auto_obj); */

// Returns true if properties can be added to an object

/* console.log(Object.isExtensible(auto_obj)); */

// Prevents changes of object properties (not values)
/* Object.seal(auto_obj); */

// Returns true if object is sealed
/* Object.isSealed(auto_obj); */

// Prevents any changes to an object
/* Object.freeze(auto_obj); */

// Returns true if object is frozen
/* Object.isFrozen(auto_obj); */

//SEAL VS FREEZE

//SEAL => Only change value
//FREEZE => Nothing


//FLAGS & DESCRIPTORS

//ENUMERABLE

/* const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

console.log(Object.getOwnPropertyNames(person));

Object.defineProperties(person,{
    firstName:{
        enumerable:false
    }
});

console.log(Object.keys(person)); */

//CONFIGURABLE

/* const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

Object.defineProperties(person,{
    firstName:{
        configurable:true
    }
});

delete person.firstName;
console.log(person);
 */

//WRITABLE

/* const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
}; */

/* console.log(person.language);
person.language = "RU";
console.log(person.language); */

/* Object.defineProperties(person,{
    language:{
        writable:false
    }
});

console.log(person.language);
person.language = "RU";
console.log(person.language); */