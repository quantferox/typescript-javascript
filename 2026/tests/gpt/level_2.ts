// 🧪 LEVEL 2 — GENERICS + KEYOF + UTILITY TYPES
// 1. Generic функция

// Типизируй функцию так, чтобы возвращался тот же тип:

// function identity<T>(value: T): T {
//     return value;
// }

// Примеры:

// identity(123)      // number
// identity("hello")  // string
// identity(true)     // boolean



// 2. Generic объект
// Создай тип:

// type Box<T> = {
//     value: T
// }

// Чтобы работало:

// const box1: Box<number> = {
//     value: 123
// };

// const box2: Box<string> = {
//     value: "hello"
// };



// 3. keyof
// Есть тип:

// type User = {
//     id: number;
//     name: string;
//     age: number;
// };

// Что получится?

// type Keys = keyof User;

// Напиши результат.
// type Keys = "id" | "name" | "age";



// 4. keyof на практике
// Сделай функцию:

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
//     return obj[key];
// }

// Чтобы работало:

// getProperty(user, "name");
// getProperty(user, "age");

// Но НЕ работало:

// getProperty(user, "salary");



// 5. typeof в типах
// Есть:

// const config = {
//     host: "localhost",
//     port: 3000
// };

// type ConfigType = typeof config;

// Создай тип Config через typeof.



// 6. Pick
// Есть:

// type User = {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// };

// Создай тип:

// type UserPreview

// Чтобы остались только:

// id
// name

// Используй Pick.

// type UserPreview = Pick<User, "id" | "name">;



// 7. Omit
// Из того же User создай тип:

// type PublicUser

// Чтобы убрать:

// email

// Используй Omit.
// type PublicUser = Omit<User, "email">;



// 8. Record
// Создай тип:

// type UserRoles = Record<string, boolean>;

// Чтобы работало:

// const roles: UserRoles = {
//     admin: true,
//     moderator: false,
//     user: true
// };

// Используй Record.



// 9. Partial
// Есть:

// type User = {
//     id: number;
//     name: string;
//     age: number;
// };

// Сделай:

// type UserUpdate = Partial<User>;

// через Partial.

// И создай объект обновления только с именем.
// const User: UserUpdate = {
//     name: "Murad",
// };



// 10. Required
// Есть:

// type User = {
//     id?: number;
//     name?: string;
// };

// Сделай тип, где всё обязательно.
// type UserRequired = Required<User>



// 11. Комбо keyof + generic
// Типизируй функцию:

// function pluck<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
//     return obj[key];
// }

// Так чтобы:

// pluck(user, "name");

// возвращал

// string;

// А

// pluck(user, "age");

// возвращал

// number;

// Подсказка:

// T[K];




// 12. Вопрос на понимание
// Что получится?

// type User = {
//     id: number;
//     name: string;
// };

// type Values = User[keyof User];
// 1)keyof User = "id" | "name"
// 2)User["id" | "name"] = "number" | "string"

// Напиши итоговый тип.
// type Values = number | string;
