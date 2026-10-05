// 🧪 LEVEL 3 — MAPPED TYPES + CONDITIONAL TYPES
// Тут начинается настоящий TypeScript.
// Если на прошлом уровне ты использовал готовые инструменты, то теперь будешь писать их сам.



// 1. Напиши свой Partial
// Без использования встроенного Partial.
// Нужно получить:

// type User = {
//     id: number;
//     name: string;
// };

// type MyPartialUser = MyPartial<User>;

// ↓

// {
//     id ?: number;
//     name ?: string;
// }

// Напиши:

// type MyPartial<T> = {
//     [P in keyof T]?: T[P]
// };



// 2. Напиши свой Required
// Без встроенного Required.

// type User = {
//     id?: number;
//     name?: string;
// };

// ↓

// {
//     id: number;
//     name: string;
// }

// Напиши:

// type MyRequired<T> = {
//     [P in keyof T]-?: T[P]
// }



// 3. Напиши свой Readonly
// Без встроенного Readonly.

// type User = {
//     id: number;
//     name: string;
// };

// ↓

// {
//     readonly id: number;
//     readonly name: string;
// }

// ↓

// type MyReadonly<T> = {
//     readonly [P in keyof T]: T[P]
// };



// 4. Напиши свой Pick
// Без встроенного Pick.

// type User = {
//     id: number;
//     name: string;
//     age: number;
// };
// type UserPreview =
//     MyPick<User, "id" | "name">;

// ↓

// {
//     id: number;
//     name: string;
// }

// Напиши:
//original method
// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// };



// 5. Напиши свой Record
// Без встроенного Record.

// Нужно:

// type Roles =
//     MyRecord<
//         "admin" | "user",
//         boolean
//     >;

// ↓

// {
//     admin: boolean;
//     user: boolean;
// }
//original method
// type Record<K extends keyof any, T> = { [P in K]: T; };
// type MyRecord<K extends keyof any, T> = {
//     [P in K]: T
// };



// 6. Первый Conditional Type
// Что получится?

// type IsString<T> =
//     T extends string
//     ? true
//     : false;
// T = string
// string extends string ? true : false
// yes -> true

// Напиши результат:

// type A = IsString<string>; //true
// type B = IsString<number>; //false



// 7. Conditional Type на практике
// Напиши:

// type ToArray<T> = T[]

// Чтобы:

// type A = ToArray<string>;

// ↓

// string[]
// type B = ToArray<number>;

// ↓

// number[]



// 8. Nullable
// Напиши:

// type Nullable<T> = {
//     [P in keyof T]: T[P] | null
// };

// Чтобы:

// type UserNullable =
//     Nullable<User>;

// ↓

// {
//     id: number | null;
//     name: string | null;
// }



// 9. NonNullable
// Что получится?

// type A =
//     NonNullable<
//         string | null | undefined
//     >;

// Напиши результат.
// type A = string



// 10. Никогда не видел, но должен догадаться
// Что получится?

// type Test<T> =
//     T extends number
//         ? "yes"
//         : "no";
// type A = Test<number>; //yes
// type B = Test<string>; //no



// 11. Мозголомка №1
// Что получится?

// type User = {
//     id: number;
//     name: string;
// };

// type Keys = {
//     [K in keyof User]: K;
// };

// K получает ключи ["id" | "name"] : а тут значение как ключ
// {
//     id: "id";      // K = "id"
//     name: "name";  // K = "name"
// }

// Напиши итоговый тип.
// object
// {
//     id: "id";      // K = "id"
//     name: "name";  // K = "name"
// }



// 12. Мозголомка №2
// Что получится?

// type User = {
//     id: number;
//     name: string;
// };

// type Values = {
//     [K in keyof User]: User[K];
// };

// keyof User = "id" | "name"
// Перебираем каждый ключ K:
//   - K = "id" → User["id"] = number
//   - K = "name" → User["name"] = string

// Напиши итоговый тип.
// {
//     id: number;
//     name: string;
// }
