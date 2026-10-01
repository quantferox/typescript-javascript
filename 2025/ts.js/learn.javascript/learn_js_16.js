// Задача 1. Camelize
// Напиши функцию camelize(str), которая преобразует строку вида "border-left-width" в "borderLeftWidth". То есть, все дефисы удаляются, а каждое слово после первого начинается с заглавной буквы.
// Примеры:
// camelize("background-color") → "backgroundColor"
// camelize("list-style-image") → "listStyleImage"
// camelize("-webkit-transition") → "WebkitTransition"
//==================================================
/* function camelize(str) {
    return str.split("-")
        .map((val, idx) => idx ? val.charAt(0).toUpperCase() + val.slice(1) : val)
        .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition")); */

// Задача 2. Фильтрация по диапазону
// Напиши функцию filterRange(arr, a, b), которая принимает массив arr и два числа a и b. Функция должна вернуть новый массив, содержащий только те элементы из arr, которые удовлетворяют условию:
// a ≤ элемент ≤ b
// При этом исходный массив не должен изменяться.
// Пример:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4); // [3, 1]
//==================================================
/* function filterRange(arr, a, b) {
    return arr.filter((value) => (a <= value && value <= b));
}
let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4)); // [3, 1] */

// Задача 3. Фильтрация по диапазону "на месте"
// Напиши функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и два числа a и b. Функция должна удалить из массива все элементы, которые не попадают в диапазон:
// a ≤ элемент ≤ b
// При этом функция изменяет исходный массив и не возвращает ничего.
// Пример:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// Теперь arr должен быть равен [3, 1]
//==================================================
/* function filterRangeInPlace(arr, a, b) {
    arr.forEach((val, idx) => {
        if (!(a <= val && val <= b)) {
            arr.splice(idx, 1);
        }
    });
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr); */

// Задача 4. Сортировка по убыванию
// Напиши код для сортировки массива чисел по убыванию. Для этого используй метод sort с подходящей функцией сравнения.
// Пример:
// let arr = [5, 2, 1, -10, 8];
// После сортировки массив должен быть: [8, 5, 2, 1, -10]
//==================================================
/* let arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => b-a);
console.log(arr); */

// Задача 5. Копия отсортированного массива
// Напиши функцию copySorted(arr), которая принимает массив строк и возвращает новый массив, являющийся отсортированной копией исходного массива. Исходный массив при этом не должен изменяться.
// Пример:
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted); // ["CSS", "HTML", "JavaScript"]
// console.log(arr);    // ["HTML", "JavaScript", "CSS"]
//==================================================
// function copySorted(arr){
//     // return arr.slice().sort();
//     // return [...arr].sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted); // ["CSS", "HTML", "JavaScript"]
// console.log(arr);    // ["HTML", "JavaScript", "CSS"]

// Задача 6. Расширяемый калькулятор
// Создай функцию-конструктор Calculator, которая создаёт объекты калькулятора с методом calculate(str).
// Метод calculate(str) принимает строку в формате "ЧИСЛО оператор ЧИСЛО" (например, "3 + 7") и возвращает результат вычисления. По умолчанию калькулятор должен поддерживать операторы "+" и "-".
// Дополнительно, добавь метод addMethod(name, func), который позволяет расширять калькулятор новыми операциями. Метод принимает оператор name (строка) и функцию func(a, b), реализующую соответствующую операцию.
// Пример использования:
// let calc = new Calculator();
// console.log(calc.calculate("3 + 7")); // 10
// calc.addMethod("*", (a, b) => a * b);
// calc.addMethod("/", (a, b) => a / b);
// calc.addMethod("**", (a, b) => a ** b);
// console.log(calc.calculate("2 ** 3")); // 8
//==================================================
/* function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }
    this.calculate = function (str) {
        let [a, operator, b] = str.split(" ");
        a = +a;
        b = +b;
        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[operator](a, b);
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
}
let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
console.log(calc.calculate("2 ** 3")); // 8 */

// Задача 7. Трансформация в массив имён
// Есть массив объектов user, где каждый объект имеет свойство name. Напиши код, который преобразует этот массив в массив имён.
// Пример:
// let users = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 28 }
// ];
// // Результат должен быть: ["Вася", "Петя", "Маша"]
//==================================================
// let users = [
//     { name: "Вася", age: 25 },
//     { name: "Петя", age: 30 },
//     { name: "Маша", age: 28 }
// ];
// users.forEach((user,idx,arr) => {
//     arr[idx] = user.name
// });
// console.log(users);

// Задача 8. Трансформация в объекты с полным именем
// Есть массив объектов user, где каждый объект имеет свойства name, surname и id. Напиши код, который создаст новый массив объектов с двумя свойствами:
// id
// fullName – строка, составленная из name и surname (через пробел).
// Пример:
// let users = [
//   { name: "Вася", surname: "Пупкин", id: 1 },
//   { name: "Петя", surname: "Иванов", id: 2 },
//   { name: "Маша", surname: "Петрова", id: 3 }
// ];
// // Новый массив должен быть:
// // [
// //   { id: 1, fullName: "Вася Пупкин" },
// //   { id: 2, fullName: "Петя Иванов" },
// //   { id: 3, fullName: "Маша Петрова" }
// // ]
//==================================================
/* let users = [
    { name: "Вася", surname: "Пупкин", id: 1 },
    { name: "Петя", surname: "Иванов", id: 2 },
    { name: "Маша", surname: "Петрова", id: 3 }
];
let modified_users = users.map((user) => {
    return {
        id: user.id,
        fullName: `${user.name} ${user.surname}`
    }
})
console.log(modified_users); */

// Задача 9. Сортировка пользователей по возрасту
// Напиши функцию sortByAge(users), которая принимает массив объектов с числовым свойством age и сортирует их по возрастанию возраста.
// Пример:
// let users = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 28 }
// ];
// sortByAge(users);
// // После сортировки: [ {name: "Вася", age: 25}, {name: "Маша", age: 28}, {name: "Петя", age: 30} ]
//==================================================
/* let users = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 28 }
];
function sortByAge(users){
    users.sort((a,b) => a.age - b.age)
}
sortByAge(users);
console.log(users) */

// Задача 10. Перемешивание массива
// Напиши функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива. Все возможные варианты расположения элементов должны быть равновероятны.
// Пример:
// let arr = [1, 2, 3];
// shuffle(arr);
// // Возможные варианты: [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
//==================================================
// let arr = [1, 2, 3];
// function shuffle(array) {
//     for (let x = array.length - 1; x > 0; x--) {
//         let idx = Math.floor(Math.random() * (x + 1));
//         [array[x], array[idx]] = [array[idx], array[x]];
//     }
// }

// shuffle(arr);
// console.log(arr);

// Задача 11. Вычисление среднего возраста
// Напиши функцию getAverageAge(users), которая принимает массив объектов user с числовым свойством age и возвращает средний возраст (среднее арифметическое).
// Пример:
// let users = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 29 }
// ];
// console.log(getAverageAge(users)); // (25 + 30 + 29) / 3 = 28
//==================================================
// let users = [
//     { name: "Вася", age: 25 },
//     { name: "Петя", age: 30 },
//     { name: "Маша", age: 29 }
// ];
// function getAverageAge(users) {
//     return users.reduce((prev, current) => prev + current.age, 0) / users.length;
// }
// console.log(getAverageAge(users));

// Задача 12. Уникальные элементы массива
// Напиши функцию unique(arr), которая принимает массив строк и возвращает новый массив, содержащий только уникальные элементы исходного массива (без повторений).
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", ":-O"];
// console.log(unique(strings)); // ["кришна", "харе", ":-O"]
//==================================================
/* function unique(arr) {
    return [...new Set(arr)];
}
let strings = ["кришна", "кришна", "харе", "харе", ":-O"];
console.log(unique(strings)); */

// Задача 13. Группировка по ID
// Напиши функцию groupById(arr), которая принимает массив объектов user (каждый объект имеет свойства id, name, age) и возвращает объект, где ключами являются id, а значениями – соответствующие объекты. Решение необходимо реализовать с использованием метода reduce.
// Пример:
// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];
// let usersById = groupById(users);
// /*
// usersById должен быть равен:
// {
//   john: { id: "john", name: "John Smith", age: 20 },
//   ann: { id: "ann", name: "Ann Smith", age: 24 },
//   pete: { id: "pete", name: "Pete Peterson", age: 31 }
// }
// */
//==================================================
/* function groupById(arr) {
    return arr.reduce((acc, current) => {
        return {
            ...acc,
            [current.id]: {
                id: current.id,
                name: current.name,
                age: current.age,
            },
        }
    }, {});
}
let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];
let usersById = groupById(users);
console.log(usersById); */

// Задача 14. Поворот массива
// Описание:
// Напиши функцию rotateArray(arr, k), которая принимает массив arr и число k. Функция должна сдвинуть элементы массива вправо на k позиций. Если k больше длины массива, используй остаток от деления (то есть, операция должна быть циклической). Можно изменять исходный массив.
// Пример:
// rotateArray([1, 2, 3, 4, 5], 2); // Результат: [4, 5, 1, 2, 3]
//==================================================
/* function rotateArray(arr, k) {
    const arr_len = arr.length;
    if (k == arr_len) {
        return arr;
    }
    if (k > arr_len) {
        k = k % arr_len;
    }
    prev = arr.slice(-k);
    curr = arr.slice(0, arr_len - k);
    return [...prev, ...curr];
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)) */

// Задача 15. Подсчёт вхождений
// Описание:
// Напиши функцию countOccurrences(arr), которая принимает массив и возвращает объект, где ключи – это элементы массива, а значения – количество раз, сколько этот элемент встречается в массиве.
// Пример:
// countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);
// // Результат: { apple: 3, banana: 2, orange: 1 }
//==================================================
/* function countOccurrences(arr) {
    const list = {};
    arr.forEach((item) => {
        if(!Object.hasOwn(list, item)){
            const count = arr.filter(elm => item === elm).length;
            list[item] = count;
        }
    });
    return list;
}
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])); */

// Задача 16. «Сплющивание» массива
// Описание:
// Напиши функцию flattenArray(arr), которая принимает многомерный (вложенный) массив и возвращает одномерный массив, содержащий все элементы из вложенных массивов. Реши задачу с помощью рекурсии (то есть функция должна уметь обрабатывать массивы с произвольной степенью вложенности).
// Пример:
// flattenArray([1, [2, [3, 4], 5], 6]);
// // Результат: [1, 2, 3, 4, 5, 6]
//==================================================
/* function flattenArray(arr) {
    const flatten_list = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flatten_list.push(...flattenArray(item));
        }
        else {
            flatten_list.push(item);
        }
    });
    return flatten_list;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); */

// Задача 17. Уникальность по критерию
// Описание:
// Напиши функцию uniqueBy(arr, fn), которая принимает массив и функцию fn. Функция fn применяется к каждому элементу, чтобы получить значение, по которому определяется уникальность. Функция uniqueBy должна вернуть массив, содержащий только первый встреченный элемент для каждого уникального значения, полученного через fn.
// Пример:
// uniqueBy(
//   [ {id: 1, name: "Alice"}, {id: 2, name: "Bob"}, {id: 1, name: "Alice"} ],
//   item => item.id
// );
// // Результат: [ {id: 1, name: "Alice"}, {id: 2, name: "Bob"} ]
//==================================================
/* function uniqueBy(arr, fn) {
    const unique_list = new Set();
    return arr.filter((item)=>{
        const key = fn(item);
        if(unique_list.has(key))
            return false;
        unique_list.add(key);
        return true;
    });
}
console.log(uniqueBy([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 1, name: "Alice" }], item => item.id)); */

// Задача 18. Группировка элементов
// Описание:
// Напиши функцию groupBy(arr, fn), которая группирует элементы массива по ключу, возвращаемому функцией fn. Результатом должна быть объект, где ключи – это значения, возвращённые fn, а значения – массивы элементов, для которых функция вернула этот ключ.
// Пример:
// groupBy(["one", "two", "three", "four"], word => word.length);
// // Результат: { 3: ["one", "two"], 5: ["three"], 4: ["four"] }
//==================================================
/* function groupBy(arr, fn) {
    return arr.reduce((acc, curr) => {
        const key = fn(curr);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(curr);
        return acc;
    }, {});
}
console.log(groupBy(["one", "two", "three", "four"], (word) => word.length)); */

// Задача 19. Сумма элементов матрицы
// Описание:
// Напиши функцию sumMatrix(matrix), которая принимает двумерный массив чисел (матрицу) и возвращает сумму всех чисел в ней. При решении используй метод reduce.
// Пример:
// sumMatrix([[1, 2, 3], [4, 5, 6]]);
// // Результат: 21
//==================================================
// function sumMatrix(matrix) {
//     return matrix.reduce((acc, curr) => {
//         acc += curr.reduce((acc2, curr2) => acc2 + curr2, 0);
//         return acc;
//     }, 0);
// }
// console.log(sumMatrix([[1, 2, 3], [4, 5, 6]]));

// Задача 20. Поиск максимального числа
// Описание:
// Напиши функцию findMax(arr), которая с помощью метода reduce находит максимальное число в массиве чисел.
// Пример:
// findMax([5, 3, 8, 1]);
// // Результат: 8
//==================================================
/* function findMax(arr){
    return arr.reduce((acc,curr)=>{
        if(acc < curr){
            acc = curr;
        }
        return acc;
    },-Infinity);
}
console.log(findMax([5, 3, 8, 1])); */

// Задача 21. Разница между массивами
// Описание:
// Напиши функцию difference(arr1, arr2), которая возвращает новый массив, содержащий те элементы, которые присутствуют в первом массиве, но отсутствуют во втором. Используй стандартные методы массивов.
// Пример:
// difference([1, 2, 3, 4], [2, 4]);
// // Результат: [1, 3]
//==================================================
/* function difference(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item));
}
console.log(difference([1, 2, 3, 4], [2, 4])); */

// Задача 22 (Бонус). Сплющенный уникальный массив
// Описание:
// Напиши функцию flattenAndUnique(arr), которая сначала «сплющивает» вложенный массив (аналогично задаче 3), а затем возвращает новый массив, содержащий только уникальные значения.
// Пример:
// flattenAndUnique([1, [2, 3, [2, 4]], 3, 5]);
// // Результат: [1, 2, 3, 4, 5]
//==================================================
/* function flattenAndUnique(arr){
    const flatten_list = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flatten_list.push(...flattenAndUnique(item));
        }
        else {
            flatten_list.push(item);
        }
    });
    return [...new Set(flatten_list)];
}
console.log(flattenAndUnique([1, [2, 3, [2, 4]], 3, 5])); */