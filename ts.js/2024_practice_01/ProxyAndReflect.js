const target = {
    "message": "Hello World!",
    "hex_value": "0x27C009F736C"
};

const handler = {
    get: (target, property) => {
        if (property in target) {
            /* return target[property]; */
            return Reflect.get(target, property);
        }
        else {
            return `Property ${property} does not exist.`;
        }
    },
    set: (target, property, value) => {
        if (property in target) {
            console.log(`Setting value ${value} to ${property}`);
            /*             target[property] = value;
                        return true; */
            return Reflect.set(target, property, value);
        }
        else {
            console.error(`Property ${property} does not exist.`);
            return false;
        }
    }
};

let proxy = new Proxy(target, handler);

/* console.log(proxy.message);
console.log(proxy.hex_value);
console.log(proxy.nonExistent); */

proxy.message = "Modified Hello World!";
proxy.hex_value = "Modified 0x27C009F736C";

console.log(target.message);
console.log(target.hex_value);