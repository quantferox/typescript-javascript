// Задача 1: Напиши код, который запросит у пользователя путь к модулю через prompt и динамически загрузит этот модуль с помощью import(). Выведи в консоль результат работы модуля (например, название модуля или какой-то текст из его экспорта).
/* (async()=>{
    const data = prompt("Путь к модулю:")
    const {sayHello} = await import(data);
    console.log(sayHello());

    // => ./modules/custom.js
    // export function sayHello(){
    //     return "hello";
    // }
})(); */

// Задача 2: Создай модуль math.js, который экспортирует две функции: add(a, b) и subtract(a, b). Напиши код, который динамически импортирует этот модуль и вызывает обе функции для выполнения операций с числами.
/* (async () => {
    const { add, subtract } = await import("./modules/math.js");
    let a = 5;
    let b = 10;

    console.log(add(a, b));
    console.log(subtract(a, b));

    // => ./modules/math.js
    // export function add(a,b){
    //     return a+b;
    // }
    // export function subtract(a,b){
    //     return a-b;
    // }
})();
 */

// Задача 3: Напиши модуль greeting.js, который экспортирует два метода: hello(name) и goodbye(name), которые будут выводить в консоль приветствие и прощание с указанным именем. Динамически загрузи этот модуль и вызови методы с разными именами.
/* (async () => {
    const { hello, goodbye } = await import("./modules/greeting.js");
    console.log(hello("Murad"));
    console.log(hello("John"));
    console.log(goodbye("Murad"));
    console.log(goodbye("John"));

    // => ./modules/greeting.js
    // export function hello(name) {
    //     return "Hello " + name;
    // }

    // export function goodbye(name) {
    //     return "Goodbye " + name;
    // }
})(); */

// Задача 4: Создай модуль say.js, в котором экспортируется по умолчанию функция, выводящая в консоль строку "Модуль загружен!". Напиши код, который динамически загрузит этот модуль и вызовет его.
/* (async () => {
    const module = await import("./modules/say.js");
    console.log(module.default());

    // => ./modules/say.js
    // export default function construct(){
    //     return "Модуль загружен"
    // }
})(); */

// Задача 5: Напиши пример кода, в котором в зависимости от выбора пользователя с помощью prompt, динамически загружается один из двух модулей. Модули могут быть простыми функциями, выводящими сообщение в консоль.
/* (async () => {
    const data = prompt("1 or 2")

    if(data == 1){
        const x = await import("./modules/fake1.js");
    }
    else{
        const x = await import("./modules/fake2.js");
    }

    // => .fakes/fakes.js
    // not export
})(); */

// Задача 6: Напиши код, который загрузит модуль с динамическим импортом и обработает ошибку, если модуль не будет найден (например, неправильный путь).
/* (async () => {
    try{
        const x = await import("./modules/fake1.js");
    }
    catch(e) {
        console.log("Модуль не найден");
    }
    // => .fakes/fakes.js
    // not export
    //Или с помощью thenable и catch
})(); */

// Задача 7: Используя динамический импорт, загрузи модуль, который экспортирует объект с несколькими методами. Выведи в консоль список всех методов объекта, используя Object.keys().
/* (async () => {
    const x = await import("./modules/math.js");
    console.log(Object.keys(x));
    // => ./modules/math.js
    // export function add(a,b){
    //     return a+b;
    // }
    // export function subtract(a,b){
    //     return a-b;
    // }
})(); */

// Задача 8: Напиши код, который использует асинхронную функцию и динамически загружает модуль, в котором экспортируется объект с двумя методами. Пример: после загрузки модуля, вызови оба метода в цикле.
/* (async () => {
    const x = await import("./modules/math.js");
    for (const method of Object.values(x)) {
        console.log(method(5, 10));
    }
    // => ./modules/math.js
    // export function add(a,b){
    //     return a+b;
    // }
    // export function subtract(a,b){
    //     return a-b;
    // }
})(); */