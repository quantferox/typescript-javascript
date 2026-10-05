// 1. Сравнение строк
// Создай Intl.Collator, который корректно сортирует строки в русском языке. Отсортируй массив:
// let words = ["ёжик", "яблоко", "апельсин", "Ёжик", "Яблоко"];
// Выведи результат.
/* let words = ["ёжик", "яблоко", "апельсин", "Ёжик", "Яблоко"];
words.sort((a, b) => new Intl.Collator("ru", { sensitivity: "base" }).compare(b, a));
console.log(words); */
//Задача не совсем точная не поянтное какой тип сортировки должен быть...поэтому базовое

// 2. Чувствительность к регистру
// Создай два Intl.Collator:
// Первый должен различать регистр (case).
// Второй должен его игнорировать.
// Сравни строки "ЁжиК" и "ёжик" в обоих случаях.
/* const caseCollator = new Intl.Collator(undefined, {sensitivity: "case"});
const caseIgnoreCollator = new Intl.Collator(undefined,{sensitivity: "base"});
const str1 = "ЁжиК";
const str2 = "ёжик";
console.log(caseCollator.compare(str1, str2));
console.log(caseIgnoreCollator.compare(str1, str2)); */

// 3. Форматирование даты
// Форматируй текущую дату в формате:
// Русском (ru-RU)
// Американском (en-US)
// Японском (ja-JP)
// Выведи результаты.
/* const date = new Date().getTime();
const dateRu = new Intl.DateTimeFormat("ru");
const dateEn = new Intl.DateTimeFormat("en");
const dateJa = new Intl.DateTimeFormat("ja");
console.log(dateRu.format(date));
console.log(dateEn.format(date));
console.log(dateJa.format(date)); */

// 4. Отображение даты с разными параметрами
// Выведи текущую дату с полным названием дня недели, месяца и годом на русском языке.
/* const formateDateRu = new Intl.DateTimeFormat("ru",{dateStyle:"full",timeStyle:"long"});
console.log(formateDateRu.format(new Date().getTime())); */

// 5. Числовое форматирование
// Используя Intl.NumberFormat, отформатируй число 1234567.89 для локалей:
// "en-US"
// "de-DE"
// "fr-FR"
// "ru-RU"
// Выведи результаты.
/* const num = 1234567.89;
const numEn = new Intl.NumberFormat("en");
const numDe = new Intl.NumberFormat("de");
const numFr = new Intl.NumberFormat("fr");
const numRu = new Intl.NumberFormat("ru");
console.log(numEn.format(num));
console.log(numDe.format(num));
console.log(numFr.format(num));
console.log(numRu.format(num)); */

// 6. Форматирование валюты
// Используя Intl.NumberFormat, отформатируй число 2500.75 как сумму в:
// Долларах США (USD)
// Евро (EUR)
// Российских рублях (RUB)
// Выведи результаты.
/* const num = 2500.75;
//Так как не указано какой регион сделаю по своему расставив коды регионы соответсвующие странам валюты
const numUsd = new Intl.NumberFormat("en",{style:"currency",currency:"USD"});
const numEur = new Intl.NumberFormat("de",{style:"currency",currency:"EUR"});
const numRub = new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"});
console.log(numUsd.format(num));
console.log(numEur.format(num));
console.log(numRub.format(num)); */

// 7. Форматирование процентов
// Используя Intl.NumberFormat, отформатируй число 0.1234 как процентное значение (12.34%).
/* const num = 0.1234;
const percent = new Intl.NumberFormat("en", { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log(percent.format(num)); */

// 8. Форматирование больших чисел
// Используя Intl.NumberFormat, отформатируй число 1000000000 так, чтобы использовалась сокращённая запись (1B, 1 млрд, в зависимости от локали).
// Выведи результат для "en-US" и "ru-RU".
/* const num = 1000000000;
const bigNumEn = new Intl.NumberFormat("en", { notation: "compact" });
const bigNumRu = new Intl.NumberFormat("ru", { notation: "compact" });
console.log(bigNumEn.format(num));
console.log(bigNumRu.format(num)); */

// 9. Сортировка чисел в строках
// Дан массив строк:
// let numbers = ["10", "2", "30", "1"];
// Отсортируй его как числа с использованием Intl.Collator.
/* const numbers = ["10", "2", "30", "1"];
const collator = new Intl.Collator("ru", {numeric:true});
numbers.sort((a,b) => collator.compare(a,b));
console.log(numbers);
numbers.sort((a,b) => collator.compare(a,b)).reverse();
console.log(numbers); */

// 10. Форматирование с тайской нумерацией
// Используя Intl.NumberFormat, отформатируй число 123456 с тайской системой (th-TH-u-nu-thai).
/* const num = 123456;
const numTh = new Intl.NumberFormat("th-TH-u-nu-thai");
console.log(numTh.format(num)); */