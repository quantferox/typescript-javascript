// Задачи:
// Деструктуризация объекта
// У нас есть объект user:
// let user = {
//   name: "John",
//   age: 25,
//   country: "USA",
//   email: "john@example.com"
// };
// Напишите деструктурирующее присваивание, чтобы:
// Свойство name присваивалось переменной name.
// Свойство age присваивалось переменной age.
// Свойство email присваивалось переменной email.
// Свойство country присваивалось переменной location.

// ========== ANSWER - START ==========
/* let user = {
    name: "John",
    age: 25,
    country: "USA",
    email: "john@example.com"
};
const { name, age, email, country } = user; */
// ========== ANSWER - ENDED ==========

// Значения по умолчанию
// У нас есть объект userSettings, который может иметь настройки пользователя:
// let userSettings = {
//   theme: "dark",
//   notifications: true
// };
// Напишите деструктурирующее присваивание, чтобы:
// Свойство theme присваивалось переменной theme.
// Свойство notifications присваивалось переменной notifications.
// Свойство language присваивалось переменной language со значением по умолчанию "English".

// ========== ANSWER - START ==========
/* let userSettings = {
    theme: "dark",
    notifications: true
};
const { theme, notifications, language = "English" } = userSettings; */
// ========== ANSWER - ENDED ==========

// Извлечение вложенных объектов
// У нас есть объект userDetails:
// let userDetails = {
//   name: "Alice",
//   address: {
//     street: "123 Main St",
//     city: "Wonderland",
//     country: "Wonderland"
//   }
// };
// Напишите деструктурирующее присваивание, чтобы:
// Свойство name присваивалось переменной name.
// Вложенное свойство address.city присваивалось переменной city.
// Вложенное свойство address.country присваивалось переменной country.

// ========== ANSWER - START ==========
/* let userDetails = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Wonderland",
        country: "Wonderland"
    }
};
const {name, address:{city,country}} = userDetails;
console.log(country) */
// ========== ANSWER - ENDED ==========

// Использование оператора rest для извлечения оставшихся свойств
// У нас есть объект product:
// let product = {
//   id: 1,
//   name: "Laptop",
//   price: 1000,
//   stock: 50
// };
// Напишите деструктурирующее присваивание, чтобы:
// Свойство id присваивалось переменной id.
// Свойство name присваивалось переменной name.
// Остальные свойства сохранялись в объект otherDetails.

// ========== ANSWER - START ==========
/* let product = {
    id: 1,
    name: "Laptop",
    price: 1000,
    stock: 50
};
const {id, name, ...otherDetails} = product */
// ========== ANSWER - ENDED ==========

// Деструктуризация массива
// У нас есть массив colors:
// let colors = ["red", "green", "blue", "yellow"];
// Напишите деструктурирующее присваивание, чтобы:
// Первый элемент присваивался переменной primaryColor.
// Второй элемент присваивался переменной secondaryColor.
// Остальные элементы сохранялись в массив additionalColors.

// ========== ANSWER - START ==========
/* let colors = ["red", "green", "blue", "yellow"];
const [primaryColor, secondaryColor, ...additionalColors] = colors; */
// ========== ANSWER - ENDED ==========

// Перебор объектов с помощью Object.entries() и деструктуризации
// У нас есть объект salaries:
// let salaries = {
//   John: 1000,
//   Pete: 2000,
//   Mary: 3000
// };
// Напишите функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника, используя Object.entries и деструктурирование. Если объект пустой, функция должна возвращать null.

// ========== ANSWER - START ==========
/* let salaries = {
    John: 1000,
    Pete: 2000,
    Mary: 3000
};

const topSalary = (salaries) => {
    const entries = Object.entries(salaries);
    if (entries.length === 0) {
        return null;
    }
    const [topPerson, topSelary] = entries.reduce((prev, current) => current[1] > prev[1] ? current : prev)
    return topPerson;
}
console.log(topSalary(salaries)); */
// ========== ANSWER - ENDED ==========

// Деструктуризация с переименованием переменных
// У нас есть объект person:
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };
// Напишите деструктурирующее присваивание, чтобы:
// Свойство firstName присваивалось переменной name.
// Свойство lastName присваивалось переменной surname.
// Свойство age присваивалось переменной years.

// ========== ANSWER - START ==========
/* let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
const {firstName:name, lastName:surname, age: years} = person; */
// ========== ANSWER - ENDED ==========

// Деструктуризация с вложенными массивами
// У нас есть массив team:
// let team = [
//   ["John", "developer"],
//   ["Pete", "designer"],
//   ["Mary", "manager"]
// ];
// Напишите деструктурирующее присваивание, чтобы:
// Из первого подмассива team[0] присваивались переменные name1 и role1.
// Из второго подмассива team[1] присваивались переменные name2 и role2.
// Из третьего подмассива team[2] присваивались переменные name3 и role3.

// ========== ANSWER - START ==========
/* let team = [
    ["John", "developer"],
    ["Pete", "designer"],
    ["Mary", "manager"]
]; */
/* const [[name1, role1],,] = team;
const [,[name2, role2],] = team;
const [,,[name3, role3]] = team; */

/* const [[name1,role1],[name2,role2],[name3,role3]] = team; */
// ========== ANSWER - ENDED ==========