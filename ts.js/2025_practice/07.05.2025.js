// "use strict";

// let geom = {
// 	name: "Фигура",
// 	sp: { x: 0, y: 0 },
// 	ep: { x: 100, y: 20 },
// 	get nameGeom() { return this.name; },
// 	set nameGeom(value) { this.name = value; }
// };

// let rect = {
// 	draw() {
// 		console.log("Рисование прямоугольника: " +
// 			this.sp.x + "," + this.sp.y + "," + this.ep.x + "," + this.ep.y);
// 	}
// };

// rect.__proto__ = geom;

// console.log(rect.nameGeom);
// rect.nameGeom = "Прямоугольник";
// console.log(rect.nameGeom);
// console.log(geom.nameGeom);

// for (let prop in rect)
// 	if (rect.hasOwnProperty(prop))
// 		console.log(prop + ":" + rect[prop]);
// let info = {
// 	getInfo() {
// 		console.log(this.name);
// 	},
// 	__proto__: rect
// };

// rect.draw();
// info.getInfo();

// let x = 10_000_000;
// const map = new Map();
// const set = new Set();
// const arr = [];

// console.time("start");

// for(let y = 0; y<=x; y++){
// 	arr.push(y);
// }

// console.timeEnd("start");

// function range(arr) {
// 	if (!arr.length) {
// 		return "";
// 	}

// 	const sortedArr = [...arr].sort((a, b) => a - b);

// 	let result = [];
// 	let start = sortedArr[0];
// 	let end = start;

// 	for (let x = 1; x <= sortedArr.length; x++) {
// 		if (sortedArr[x] === end + 1) {
// 			end = sortedArr[x];
// 		}
// 		else {
// 			if (start === end) {
// 				result.push(`${start}`);
// 			}
// 			else {
// 				result.push(`${start}-${end}`);
// 			}
// 			start = sortedArr[x];
// 			end = start;
// 		}
// 	}

// 	return result.join(",");
// }

// console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0])); // "0-5,8-9,11"
// console.log(range([1, 4, 3, 2])); // "1-4"


/*
2. Дан массив целых неотрицательных чисел, нужно группировать друг с другом числа,
	которые можно получить путём перестановки цифр их составляющих.
	Нули при этом игнорируем, т.к. нет числа 011.
	Решение должно быть максимально эффективно по памяти и времени.
*/

// function digitPermutation(arr) {
// 	const groups = new Map();

// 	for (let idx = 0; idx < arr.length; idx++) {
// 		const currentValue = parseInt(arr[idx].toString().replaceAll("0", "").split("").sort().join(""));
// 		if (groups.has(currentValue)) {
// 			groups.get(currentValue).push(arr[idx]);
// 		}
// 		else {
// 			groups.set(currentValue, [arr[idx]]);
// 		}
// 	}

// 	return Array.from(groups.values());
// }

// console.log('start test');
// console.log(digitPermutation([123, 99, 23001, 123, 111, 300021, 101010, 90000009, 9]));
// // [[99, 90000009], [111, 101010], [123, 123, 23001, 300021], [9]]
// console.log(digitPermutation([111, 221, 1])); // [[111], [221], [1]]
// console.log(digitPermutation([11111111112, 12222222222])); // [[11111111112], [12222222222]]
// console.log('end test');
