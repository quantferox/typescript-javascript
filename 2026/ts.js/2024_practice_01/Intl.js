const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Секунды
console.log(rtf.format(-1, "second"));   // секунда назад
console.log(rtf.format(-2, "second"));   // 2 секунды назад
console.log(rtf.format(-5, "second"));   // 5 секунд назад
console.log(rtf.format(-21, "second"));  // 21 секунда назад

// Минуты
console.log(rtf.format(-1, "minute"));   // минута назад
console.log(rtf.format(-2, "minute"));   // 2 минуты назад
console.log(rtf.format(-5, "minute"));   // 5 минут назад
console.log(rtf.format(-21, "minute"));  // 21 минута назад

// Часы
console.log(rtf.format(-1, "hour"));     // час назад
console.log(rtf.format(-2, "hour"));     // 2 часа назад
console.log(rtf.format(-5, "hour"));     // 5 часов назад
console.log(rtf.format(-21, "hour"));    // 21 час назад

// Дни
console.log(rtf.format(-1, "day"));      // день назад
console.log(rtf.format(-2, "day"));      // 2 дня назад
console.log(rtf.format(-5, "day"));      // 5 дней назад
console.log(rtf.format(-21, "day"));     // 21 день назад

// Недели
console.log(rtf.format(-1, "week"));     // неделя назад
console.log(rtf.format(-2, "week"));     // 2 недели назад
console.log(rtf.format(-5, "week"));     // 5 недель назад
console.log(rtf.format(-21, "week"));    // 21 неделя назад

// Месяцы
console.log(rtf.format(-1, "month"));    // месяц назад
console.log(rtf.format(-2, "month"));    // 2 месяца назад
console.log(rtf.format(-5, "month"));    // 5 месяцев назад
console.log(rtf.format(-21, "month"));   // 21 месяц назад

// Годы
console.log(rtf.format(-1, "year"));     // год назад
console.log(rtf.format(-2, "year"));     // 2 года назад
console.log(rtf.format(-5, "year"));     // 5 лет назад
console.log(rtf.format(-21, "year"));    // 21 год назад
