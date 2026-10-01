// 🧪 LEVEL 1 — TYPESCRIPT FOUNDATION CHECK
// Отвечай прямо кодом. Без объяснений (потом разберём).

// 1. Типизация объекта
// Сделай тип для этого объекта:

// type UserType = {
//     id: number,
//     name: string,
//     isAdmin: boolean,
// };

// const user: UserType = {
//     id: 1,
//     name: "Murad",
//     isAdmin: true
// };



// 2. Union types
// Напиши тип Status, который может быть только:
// "loading"
// "success"
// "error"
// И используй его тут:

// type StatusType = "loading" | "success" | "error";
// const apiStatus: StatusType = "loading";



// 3. Function typing
// Типизируй функцию:

// function sum(a: number, b: number): number {
//     return a + b;
// }

// 👉 важно: строгий TS (без any)



// 4. Optional properties
// Сделай тип:

// type Product = {
//     name: string;
//     price: number;
//     description?: string; // может отсутствовать
// };

// И создай объект:

// const p1: Product = {
//     name: "Mercedes",
//     price: 123,
// };

// const p2: Product = {
//     name: "Mercedes",
//     price: 123,
//     description: "Mercedes description...",
// };



// 5. Array typing
// Типизируй массив:

// const ids: number[] = [1, 2, 3, 4];
// const ids_1: Array<number> = [1, 2, 3, 4];

// И сделай функцию:

// function getFirst(arr: number[]): number {
//     return arr[0];
// }



// 6. Literal narrowing
// Что выведет TS?

// let x = "hello";
// x = "world";

// А теперь:

// const y = "hello";

// 👉 вопрос: какой тип у y?
// type Y = "hello";



// 7. Type inference
// Что выведет TS:

// const obj = {
//     a: 10,
//     b: "text"
// };

// 👉 напиши тип obj
// {
//     a: number;
//     b: string;
// }



// 8. Any vs Unknown
// Что не так тут:

// function test(data: unknown) {
//     if (data != null && data && typeof (data) === "string")
//         return data.toUpperCase();
// }

// 👉 перепиши безопасно через unknown



// 9. Tuple
// Создай тип для:

// type PointType = [number, number];

// const point: PointType = [10, 20];



// 10. Return type
// Типизируй:

// function createUser() {
//     return {
//         id: 1,
//         name: "Murad"
//     };
// }

// type User = ReturnType<typeof createUser>;

// 👉 используй ReturnType
