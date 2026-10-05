// Вот несколько задач по теме "Типы данных в JavaScript", чтобы проверить твои знания на методы Object.keys, Object.values, Object.entries:

// 1. Сумма свойств объекта
// Напиши функцию sumSalaries(salaries), которая возвращает сумму всех зарплат в объекте с использованием метода Object.values и цикла for..of.
// Пример:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// alert( sumSalaries(salaries) ); // 650

// ========== ANSWER - START ==========
/* let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
const sumSalaries = (salaries) => {
    let sum = 0;
    const values = Object.values(salaries);
    for(const value of values){
        sum += value;
    }
    return sum;
}
console.log(sumSalaries(salaries)); // 650 */
// ========== ANSWER - ENDED ==========

// 2. Подсчёт количества свойств объекта
// Напиши функцию count(obj), которая возвращает количество свойств объекта. Игнорируй символьные свойства и учитывай только обычные.
// Пример:
// let user = {
//   name: 'John',
//   age: 30
// };
// alert( count(user) ); // 2

// ========== ANSWER - START ==========
/* let user = {
    name: 'John',
    age: 30,
    [Symbol("id")]: "3000"
};
const count = (obj) => {
    return Object.keys(obj).length;
}
console.log(count(user)); // 2 */
// ========== ANSWER - ENDED ==========

// 3. Печать значений объекта
// Напиши функцию printValues(obj), которая выводит все значения свойств объекта в консоль.
// Пример:
// let user = {
//   name: 'John',
//   age: 30
// };

// printValues(user);
// // Должно вывести:
// // John
// // 30

// ========== ANSWER - START ==========
/* let user = {
    name: 'John',
    age: 30
};
function printValues(obj){
    const values = Object.values(obj);
    for(const value of values){
        console.log(value);
    }
}

printValues(user); */
// ========== ANSWER - ENDED ==========

// 4. Преобразование объекта в массив пар [ключ, значение]
// Напиши функцию objectToArray(obj), которая преобразует объект в массив пар ключ-значение с использованием Object.entries.
// Пример:
// let user = {
//   name: 'John',
//   age: 30
// };
// alert( objectToArray(user) );
// // Должно вывести:
// // [["name", "John"], ["age", 30]]

// ========== ANSWER - START ==========
/* let user = {
    name: 'John',
    age: 30
};
function objectToArray(obj){
    return Object.entries(obj);
}
console.log(objectToArray(user)); */
// ========== ANSWER - ENDED ==========

// 5. Фильтрация свойств объекта
// Напиши функцию filterObject(obj), которая возвращает новый объект, содержащий только те свойства, значения которых больше 100.
// Пример:
// let prices = {
//   banana: 50,
//   orange: 120,
//   meat: 200
// };
// alert( filterObject(prices) );
// // Должно вывести:
// // {orange: 120, meat: 200}

// ========== ANSWER - START ==========
/* let prices = {
    banana: 50,
    orange: 120,
    meat: 200
};
const filterObject = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([productName, productPrice], idx) => productPrice > 100)
    );
}
console.log(filterObject(prices)); */
// ========== ANSWER - ENDED ==========

// 6. Умножение всех значений объекта на 2
// Напиши функцию doubleValues(obj), которая умножает все значения объекта на 2 с помощью Object.entries и Object.fromEntries.
// Пример:
// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4
// };
// alert( doubleValues(prices) );
// // Должно вывести:
// // {banana: 2, orange: 4, meat: 8}

// ========== ANSWER - START ==========
/* let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};
const doubleValues = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).map(([productName,productPrice],idx) => [productName, productPrice*2])
    );
}
console.log(doubleValues(prices)); */
// ========== ANSWER - ENDED ==========

// 7. Получение всех ключей объекта
// Напиши функцию getKeys(obj), которая возвращает все ключи объекта как массив с использованием Object.keys.
// Пример:
// let user = {
//   name: 'John',
//   age: 30
// };
// alert( getKeys(user) );
// // Должно вывести:
// // ["name", "age"]

// ========== ANSWER - START ==========
/* let user = {
    name: 'John',
    age: 30
};
const getKeys = (obj) => {
    return Object.keys(obj);
}
console.log(getKeys(user)); */
// ========== ANSWER - ENDED ==========

// 8. Преобразование массива в объект
// Напиши функцию arrayToObject(arr), которая принимает массив пар [ключ, значение] и возвращает объект, используя Object.fromEntries.
// Пример:
// let entries = [
//   ["name", "John"],
//   ["age", 30]
// ];
// alert( arrayToObject(entries) );
// // Должно вывести:
// // {name: "John", age: 30}

// ========== ANSWER - START ==========
/* let entries = [
    ["name", "John"],
    ["age", 30]
];
const arrayToObject = (obj) => {
    return Object.fromEntries(entries);
}
console.log(arrayToObject(entries)); */
// ========== ANSWER - ENDED ==========