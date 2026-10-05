// Test ||

// const debounce = (fn,delay) => {
// 	let timeoutId = null;
// 	return (...args)=>{
// 		clearTimeout(timeoutId);
// 		timeoutId = setTimeout(()=> fn.apply(this, args), delay);
// 	}
// }

// const debounceLog = debounce(console.log, 1000);
// debounceLog("Hi");
// debounceLog("Hello");

// let controller;

// const cancelBtn = document.getElementById("cancel-btn");
// const fetchBtn = document.getElementById("fetch-btn");

// function fetchData() {
// 	if (controller) controller.abort();

// 	controller = new AbortController();
// 	const signal = controller.signal;

// 	const api = "https://jsonplaceholder.typicode.com/todos/1";

// 	fetch(api, { signal })
// 		.then((res) => {
// 			if (!res.ok) throw new Error("Что-то пошло не так");
// 			return res.json();
// 		})
// 		.then((data) => {
// 			console.log("Ответ получен:", data);
// 		})
// 		.catch((err) => {
// 			if (err.name === "AbortError") {
// 				console.log("Запрос был отменён");
// 			} else {
// 				console.error("Ошибка:", err);
// 			}
// 		});
// }

// fetchBtn.addEventListener("click", ()=>{
// 	fetchData();
// });

// cancelBtn.addEventListener("click", () => {
// 	if (controller) {
// 		controller.abort();
// 		controller = null;
// 		console.log("Запрос отменён вручную");
// 	}
// });



// Test |
// const controller = new AbortController();
// const signal = controller.signal;

// fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: signal })
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(error => {
// 		console.log(error.name === "AbortError");
// 	});

// setTimeout(() => {
// 	controller.abort();
// }, 10);


// /* function debounce(fn, delay) {
// 	let timeoutId;
// 	return function (...args) {
// 		clearTimeout(timeoutId);
// 		timeoutId = setTimeout(() => fn.apply(this, args), delay);
// 	};
// }

// const debouncedLog = debounce(console.log, 2);
// debouncedLog("hello");
// debouncedLog("hello again"); */