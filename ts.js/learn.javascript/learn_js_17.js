// Задача 1: Создай асинхронный итератор для объекта, который будет возвращать числа от 1 до 10, с задержкой в 500 миллисекунд между каждым значением.
/* const rangeTimeout = {
    from: 1,
    to: 10,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,
            async next() {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        if (this.current <= this.last) {
                            resolve({
                                done: false,
                                value: this.current++
                            })
                        }
                        else {
                            resolve(
                                {
                                    done: true
                                }
                            );
                        }
                    }, 500);
                });
            }
        }
    }
} */

// Задача 2: Напиши асинхронный генератор, который будет эмулировать запросы к API, задерживая каждую итерацию на 2 секунды и возвращая объект с данными о пользователе (например, { id: 1, name: "User 1" }).
/* async function* fetch_users() {
    let id = 1;
    while (id <= 10) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        yield { id: id, name: `User ${id}` };
        id++;
    }
}
(async () => {
    for await (const user of fetch_users()) {
        console.log(user);
    }
})(); */

// Задача 3: Создай функцию, которая будет перебирать URL-адреса API с постраничной загрузкой данных. Например, при вызове fetchData('https://example.com/data'), она должна перебирать страницы, запрашивая новые данные, пока не будут получены все записи.
/* async function* bruteforceUrl(url) {
    let page = 1;
    while (page <= 10) {
        const response = await fetch(url + `?page=${page}`);
        if (response.status === 200) {
            yield await response.json();
            page++;
        }
        else {
            return;
        }
    }
}
(async () => {
    for await (const urls of bruteforceUrl("https://example.com/")) {
        console.log(urls);
    }
})(); */

// Задача 4: Реализуй асинхронный итератор, который будет возвращать данные с использованием setTimeout, имитируя загрузку информации с задержкой. Попробуй написать его так, чтобы он принимал два параметра — диапазон чисел (например, от 1 до 5) и задержку.
/* const get_info = (from, to, delay) => ({
    [Symbol.asyncIterator]() {
        let current = from;
        return {
            async next() {
                if (current <= to) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return { value: { id: current++ }, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
});

(async () => {
    const iterator = get_info(1, 5, 1000)[Symbol.asyncIterator]();
    for await (const info of iterator) {
        console.log(info);
    }
})();
 */

// Задача 5: Напиши асинхронный генератор, который будет получать данные с сервера по API и возвращать первые 5 записей. Для имитации API используй setTimeout с задержкой.
/* async function* fetch_data() {
    for (let i = 1; i <= 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield { id: i, name: `User ${i}` }
    }
}
(async () => {
    for await (const data of fetch_data()) {
        console.log(data);
    }
})(); */

// Задача 6: Реализуй асинхронный итератор для обработки массива объектов. Итератор должен возвращать по одному объекту за раз с задержкой в 1 секунду между каждым элементом.
/* const createAsyncIterator = (data, delay) => ({
    [Symbol.asyncIterator]() {
        let index = 0;
        return {
            async next() {
                if (index < data.length) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return { value: data[index++], done: false };
                }
                else {
                    return { done: true }
                }
            }
        }
    }
});
const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" }
];
(async () => {
    for await (const item of createAsyncIterator(data, 1000)) {
        console.log(item);
    }
})(); */

// Задача 7: Напиши код, который будет использовать асинхронный генератор для получения постов из API. Генератор должен запрашивать новые страницы до тех пор, пока не получит все посты. С каждым новым запросом задержка увеличивается на 500 миллисекунд.
/* async function* fetchPosts(url) {
    let page = 1;
    let delay = 500;
    while (true) {
        await new Promise(resolve => setTimeout(resolve, delay));
        const response = await fetch(`${url}?page=${page}`);
        if (response.status !== 200) {
            return;
        }
        const data = await response.json();
        if (data.length === 0) {
            return;
        }
        yield data;
        page++;
        delay += 500;
    }
}
(async () => {
    for await (const posts of fetchPosts("https://example.com/posts")) {
        console.log(posts);
    }
})(); */

// Задача 8: Напиши функцию, которая будет асинхронно перебирать объекты с разными типами данных. Например, числовые, строковые и булевы значения, и с каждым типом данных будет связана своя асинхронная задержка.
/* async function processObject(data) {
    const delays = {
        "number": 500,
        "string": 1000,
        "boolean": 1500
    };
    for (const [key, value] of Object.entries(data)) {
        const type = typeof value;
        const delay = delays[type] || 2000;
        await new Promise(resolve => setTimeout(resolve, delay));
        console.log(`Ключ: ${key}, Значение: ${value}, Тип: ${type}, Задержка: ${delay}мс`);
    }
}
const sampleData = {
    id: 42,
    name: "Murad",
    isActive: true,
    score: 99.9,
    status: "Enabled",
    hasAccess: false
};
(async () => {
    await processObject(sampleData);
})(); */

// Задача 9: Создай функцию, которая будет использовать асинхронный итератор для получения данных с разных источников и комбинировать их в один массив (с задержками между запросами).
/* async function* fetchFromSource(url, delay) {
    const response = await fetch(url);
    const data = await response.json();
    await new Promise(resolve => setTimeout(resolve, delay));
    yield data;
}

async function combineDataFromSources(sources, delay) {
    const combinedData = [];
    for (const source of sources) {
        for await (const data of fetchFromSource(source, delay)) {
            combinedData.push(...data);
        }
    }
    return combinedData;
}
const sources = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/users"
];
(async () => {
    const combinedData = await combineDataFromSources(sources, 1000);
    console.log(combinedData);
})(); */

// Задача 10: Реализуй асинхронный генератор для вывода данных с задержкой, где значения будут поступать с интервалом в 3 секунды. Пример использования: for await (let value of generator) { console.log(value); }.
/* async function* asyncGenerator() {
    let count = 1;
    while (count <= 5) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        yield `Значение ${count}`;
        count++;
    }
}
(async () => {
    for await (let value of asyncGenerator()) {
        console.log(value);
    }
})(); */
