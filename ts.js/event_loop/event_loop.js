// function log(value){
// 	console.log(value);
// }

// log("1");

// setTimeout(()=>{
// 	log("setTimeout 1");
// 	Promise.resolve().then(()=>{
// 		log("promise setTimeout");
// 	});
// },0);

// setTimeout(()=>{
// 	log("setTimeout 2");
// });

// queueMicrotask(()=>{
// 	log("queueMicrotask 1");
// })

// Promise.resolve().then(()=>{
// 	log("promise 1");
// });

// queueMicrotask(()=>{
// 	log("queueMicrotask 2");
// })

// Promise.resolve().then(()=>{
// 	log("promise 2");
// });

// log("4");

// [1] [4] [queueMicrotask 1] [promise 1] [queueMicrotask 2] [promise 2] [setTimeout 1] [promise setTimeout] [setTimeout 2]

// MutationObserver пораждает микротаску 100% так как выполняется сначала синхронный код
// а потом выполняются микротаски включая MutationObserver а затем очередь макрозадач

// =============================================================================
// Задача 1
// console.log('A');
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// console.log('D');
// A->D->C->B

// Задача 2
// console.log('1');
// setTimeout(() => console.log('2'), 0);
// setImmediate(() => console.log('3'));
// process.nextTick(() => console.log('4'));
// Promise.resolve().then(() => console.log('5'));
// console.log('6');
//1->6->4->5->2->3

// Задача 3
// setTimeout(() => {
// 	console.log('setTimeout 1');
// 	Promise.resolve().then(() => console.log('Promise 1'));
// }, 0);

// setTimeout(() => {
// 	console.log('setTimeout 2');
// 	queueMicrotask(() => console.log('queueMicrotask 1'));
// }, 0);

// Promise.resolve().then(() => {
// 	console.log('Promise 2');
// 	setTimeout(() => console.log('setTimeout 3'), 0);
// });

// console.log('Sync 1');
// Sync 1->Promise 2->setTimeout 1->Promise 1->setTimeout 2->queueMicrotask 1->setTimeout 3

// Задача 4
// console.log('Start');
// setTimeout(() => console.log('Timeout 1'), 100);
// setTimeout(() => console.log('Timeout 2'), 0);
// Promise.resolve().then(() => console.log('Promise 1'));
// Promise.resolve().then(() => {
// 	console.log('Promise 2');
// 	setTimeout(() => console.log('Timeout 3'), 0);
// });
// console.log('End');
//Start->End->Promise 1->Promise 2->Timeout 2->Timeout 3->Timeout 1

// Задача 5
// setTimeout(() => console.log('Timeout 1'), 0);
// setTimeout(() => console.log('Timeout 2'), 0);
// Promise.resolve().then(() => {
// 	console.log('Promise 1');
// 	Promise.resolve().then(() => console.log('Promise 2'));
// });
// queueMicrotask(() => console.log('Microtask 1'));
// queueMicrotask(() => {
// 	console.log('Microtask 2');
// 	queueMicrotask(() => console.log('Microtask 3'));
// });
//->Promise 1->Microtask 1->Microtask 2->Promise 2->Microtask 3->Timeout 1->Timeout 2

// Задача 6
// setTimeout(() => console.log('A'), 0);
// Promise.resolve().then(() => console.log('B'));
// console.log('C');
// queueMicrotask(() => console.log('D'));
// setTimeout(() => {
// 	console.log('E');
// 	queueMicrotask(() => console.log('F'));
// }, 0);
//->C->B->D->A->E->F

// Задача 7
// console.log('1');
// setTimeout(() => console.log('2'), 0);
// Promise.resolve().then(() => {
// 	console.log('3');
// 	setTimeout(() => console.log('4'), 0);
// });
// console.log('5');
//->1->5->3->2->4

// Задача 8
// setTimeout(() => console.log('Timeout 1'), 0);
// Promise.resolve().then(() => {
// 	console.log('Promise 1');
// 	queueMicrotask(() => console.log('Microtask 1'));
// });
// console.log('Sync 1');
//->Sync 1->Promise 1->Microtask 1->Timeout 1

// Задача 9
// console.log('Start');
// setTimeout(() => console.log('Timeout 1'), 10);
// setTimeout(() => console.log('Timeout 2'), 0);
// queueMicrotask(() => console.log('Microtask 1'));
// Promise.resolve().then(() => console.log('Promise 1'));
// console.log('End');
//->Start->End->Microtask 1->Promise 1->Timeout 2->Timeout 1

// Задача 10
// Promise.resolve().then(() => console.log('A'));
// console.log('B');
// setTimeout(() => console.log('C'), 0);
// queueMicrotask(() => console.log('D'));
// console.log('E');
//->B->E->A->D->C

// Задача 11
// setTimeout(() => console.log('Timeout 1'), 0);
// Promise.resolve().then(() => console.log('Promise 1'));
// queueMicrotask(() => console.log('Microtask 1'));
// console.log('Sync 1');
//->Sync 1->Promise 1->Microtask 1->Timeout 1

// Задача 12
// console.log('1');
// setImmediate(() => console.log('2'));
// process.nextTick(() => console.log('3'));
// Promise.resolve().then(() => console.log('4'));
// console.log('5');
//->1->5->3->4->2

// Задача 13
// setTimeout(() => console.log('Timeout 1'), 0);
// setImmediate(() => console.log('Immediate 1'));
// process.nextTick(() => console.log('Tick 1'));
// console.log('Sync 1');
//->Sync 1->Tick 1->Timeout 1->Immediate 1

// Задача 14
// console.log('Start');
// Promise.resolve().then(() => console.log('Promise 1'));
// queueMicrotask(() => console.log('Microtask 1'));
// setTimeout(() => console.log('Timeout 1'), 0);
// console.log('End');
//->Start->End->Promise 1->Microtask 1->Timeout 1->

// Задача 15
// Promise.resolve().then(() => console.log('Promise 1'));
// setTimeout(() => console.log('Timeout 1'), 0);
// Promise.resolve().then(() => {
// 	console.log('Promise 2');
// 	setTimeout(() => console.log('Timeout 2'), 0);
// });
// console.log('Sync 1');
//->Sync 1->Promise 1->Promise 2->imeout 1->Timeout 2
// =============================================================================
// Спор

// setTimeout(() => {
//     console.log('A');
//     Promise.resolve().then(() => console.log('B'));
// }, 0);

// setTimeout(() => {
//     console.log('C');
// }, 0);

// Promise.resolve().then(() => console.log('D'));

// console.log('E');
//->E->D->A->B->C