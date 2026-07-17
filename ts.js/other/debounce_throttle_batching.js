// =============================================================================
// Дебаунс (Debounce)

// Simple debounce
// function debounce(fn, delay) {
// 	let timer;
// 	return function (value) {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => fn.call(this, value), delay);
// 	};
// }

// const log = (message) => {
// 	console.log(`Search: ${message}`);
// };

// const onSearch = debounce(log, 512);
// onSearch("N");
// onSearch("Na");
// onSearch("Nam");
// onSearch("Name");

// AbortController Debounce
// function fetchDebounce(fn, delay) {
// 	let timer;
// 	let controller;

// 	return function (...args) {
// 		clearTimeout(timer);
// 		if (controller) controller.abort();
// 		controller = new AbortController();
// 		const acSignal = controller.signal;
// 		timer = setTimeout(() => fn.call(this, ...args, acSignal), delay);
// 		console.log("Timeout Update");
// 	};
// }

// const search = async (query, signal) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts?q=${query}`,
// 		{ signal });
// 	const data = await res.json();
// 	console.log(data);
// };

// const onSearch = fetchDebounce(search, 512);
// onSearch("N");
// onSearch("Na");
// onSearch("Nam");
// onSearch("id minus libero illum nam ad officiis");
// =============================================================================
// Батчинг (Batching)

// const createBatchProcessor = (fn, timeout) => {
// 	let queue = [];
// 	let timer = null;

// 	return function (value) {
// 		queue.push(value);
// 		if (!timer) {
// 			timer = setTimeout(() => {
// 				fn(queue);
// 				queue = [];
// 				timer = null;
// 			}, timeout);
// 		}
// 	};
// };

// const log = (messages) => {
// 	console.log(`${messages.join(" ")}`);
// };

// const logBatch = createBatchProcessor(log, 512);
// logBatch("🦊");
// logBatch("🐱");
// logBatch("🐶");
// =============================================================================
// Троттлинг (Throttling)
// function throttle(fn, delay) {
// 	let lastCall = 0;
// 	return function (...args) {
// 		const now = Date.now();
// 		if (now - lastCall >= delay) {
// 			lastCall = now;
// 			fn.apply(this, args);
// 		}
// 	};
// }

// const log = (value) => {
// 	console.log(value);
// };

// const onSubmit = throttle(log, 512);


// let count = 1;
// setInterval(() => onSubmit("🦊".repeat(count++)), 128);
