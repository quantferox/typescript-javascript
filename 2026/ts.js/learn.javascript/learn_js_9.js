/* function lang(...args) {
    return args[0].multiply.incrmnt;
}

console.log(lang({
    multiply: {
        "incrmnt": "five",
    }
})) */


/* const serverCode = `
    let x = 5;
    let y = 10;
    console.log(x+y);
`;

let func = new Function(serverCode);

func(); */

/* window.userObj = {
    id: "1",
    name: "Murad",
}; */

/* var userObj = {
    id: "2",
    name: "Terminator",
}; */
/* 
console.log(userObj) */

/* console.log(window.Promise) */

/* function factorial(){
    console.log("factorial");
}

console.log(factorial.name);
 */

/* function test(helloWorld = function() {}){
    console.log(helloWorld.name);
}

test(); */

/* function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        console.log(handler)
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }

}

ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result)); */