// Напиши функцию curryMultiply, которая будет каррировать функцию умножения, принимающую два аргумента. Пример использования: curryMultiply(2)(3) должен возвращать 6.
/* const curryMultiply = (a)=> {
    return (b)=>{
        return a*b;
    }
}
console.log(curryMultiply(2)(3)); */

// Создай функцию currySum, которая будет каррировать функцию сложения трёх чисел. Пример: currySum(1)(2)(3) должен возвращать 6.
/* const currySum = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(currySum(1)(2)(3)); */

// Напиши функцию curriedLog, которая будет каррировать функцию логирования. Логирование должно работать как curriedLog("INFO")("Message"), а также как curriedLog("ERROR", "Critical error").
/* const curriedLog = (...args) => {
    if (args.length === 1) {
        return (message) => `${args[0]}:\t${message}`;
    }
    return `${args[0]}:\t${args[1]}`;
}; */
/* console.log(curriedLog("INFO")("Message"));
console.log(curriedLog("ERROR", "Critical error")); */

// Создай функцию add с четырьмя аргументами. Напиши для неё каррированную версию, которая будет принимать аргументы поочередно, например, add(1)(2)(3)(4).
/* const add = (a) => {
    return (b) => {
        return (c) => {
            return (d) => {
                return a+b+c+d;
            }
        }
    }
}
console.log(add(1)(2)(3)(4)); */

// Напиши каррированную функцию createUser, которая будет принимать сначала имя пользователя, затем email, а затем возраст. Пример: createUser('John')('john@example.com')(30).
/* const createUser = (name) => {
    return (email) => {
        return (year) => {
            return `${name} ${email} ${year}`;
        }
    }
}
console.log(createUser("John")("john@example.com")(30)); */

// Создай каррированную функцию для вычисления средней температуры за неделю. Функция должна принимать 7 аргументов (по одному для каждого дня), например: averageTemp(10)(12)(15)(18)(20)(22)(19).
/* const averageTemp = (a) => {
    return (b) => {
        return (c) => {
            return (d) => {
                return (e) => {
                    return (f) => {
                        return (j) => {
                            return Math.round((a + b + c + d + e + f + j) / 7);
                        }
                    }
                }
            }
        }
    }
}
console.log(averageTemp(10)(12)(15)(18)(20)(22)(19)); */

// Создай функцию каррирования, которая будет работать с произвольным количеством аргументов и возвращать результат, если все аргументы переданы. Используй её для умножения всех переданных чисел.
/* const curriedMultiply = (...args) => {
    if (args.length === 0){
        return 1;
    }
    return (...moreArgs)=>{
        return moreArgs.length ? curriedMultiply(...args,...moreArgs):args.reduce((acc,num) => acc*num,1);
    }
}
console.log(curriedMultiply(2)(3)(4)(2)());
console.log(curriedMultiply(5, 2)(3)(2)());
console.log(curriedMultiply(7, 2, 3, 1)(1)()); */

// Напиши каррированную функцию для создания приветствия, которая будет работать как greet('Hello')('John') и возвращать строку "Hello, John".
/* const greet = (welcome) =>{
    return (name) => {
        return `${welcome} ${name}`;
    }
} */

// Создай функцию curriedConcat для объединения строк, которая будет каррировать строку, принимая поочередно части строки, например: curriedConcat('Hello')(' ')('World') — должен вернуть "Hello World".
/* const curriedConcat = (str) => (next) => next !== undefined ? curriedConcat(str + next) : str;
console.log(curriedConcat('Hello')(' ')('World')()); */

// Реализуй каррированную версию функции logMessage, которая будет логировать сообщение с временной меткой и уровнем важности (например, DEBUG, ERROR). Пример: logMessage(new Date())('INFO')('Server started').
/* const logMessage = (date) => {
    return (type) =>{
        return (message) => {
            return `[${date}]${type} - ${message}`;
        }
    }
}
console.log(logMessage(new Date())('INFO')('Server started')); */