// 1. // Что выведет следующий код?
//    let user = {
//        name: "Alice",
//        greet: function() { console.log(this.name); }
//    };
//    (user.greet)();
// Данный код вызовет функцию greet и выведет в консоль имя Alice

// 2. // Как сделать, чтобы следующий код работал и выводил "Alice"?
/* let user = {
    name: "Alice",
    greet: function () { console.log(this.name); }
};
let sayHello = user.greet.bind(user);
sayHello(); */

// 3. // Почему при вызове метода ниже возникает ошибка? Как исправить?
/* let user = {
    name: "Alice",
    greet: function () { console.log(this.name); }
};
(user.name === "Alice" ? user.greet.bind(user) : function () { console.log("Привет") })();
Ошибка из за того что при вызове теряется контекст this и исправляется с созданием новой функции с помощью бинд в
заданом контексте*/

// 4. // Какой будет вывод в консоль и почему?
/* let obj = {
    method: function () {
        console.log(this);
    }
};
let func = obj.method;
func();
Ответ будет объект текущего this а самый ближайщий this это сама функция т.к она
не стрелочная у него имеется свой this */

// 5. // Что выведет этот код?
/* let obj = {
    name: "Object",
    method() {
        return function () {
            console.log(this.name);
        };
    }
};
obj.method()();
Выведет undefined */

// 6. // Почему `this` теряется при передаче метода в setTimeout?
/* let user = {
    name: "Alice",
    sayHi: function () { console.log(this.name); }
};
setTimeout(user.sayHi, 1000); // Почему undefined?
потому что вызывается в другом контексте вне user */

// 7. // Как можно привязать `this`, чтобы код работал?
/* let user = {
    name: "Alice",
    greet: function () { console.log(this.name); }
};
let sayHello = user.greet;
sayHello.bind(user)();
Код уже работает из за привязки bind */


// 8. // Что будет в консоли?
/* let user = {
    name: "Alice",
    showName: function () { console.log(this.name); }
};
let admin = user;
user = null;
admin.showName();
Мы делаем копию объекта поэтому контекст не будет терятся ответ Alice */
