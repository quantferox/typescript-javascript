// const x = Array.from({ length: 100_000_000 }, (_, num) => num + 1);
// const target = 99_156_742;

//Binary Search Function
// function binary_search(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const middle = Math.floor((left + right) / 2);
//         if (arr[middle] === target) {
//             return middle;
//         }
//         else if (arr[middle] < target) {
//             left = middle + 1;
//         }
//         else {
//             right = middle - 1;
//         }
//     }

//     return -1;
// }

//Linear Search Function
// function linear_search(arr, target) {
//     for (let idx = 0; idx < arr.length; idx++) {
//         if (arr[idx] === target) {
//             return idx;
//         }
//     }
//     return -1;
// }

//Linear Search Test
// console.time("linear_search");
// const val = linear_search(x, target);
// console.log(val);
// console.timeEnd("linear_search");

//Binary Search Test
// console.time("binary_search");
// const val = binary_search(x, target);
// console.log(val);
// console.timeEnd("binary_search");
// =============================================================================
// Selection Sorting
// const arr = [
//     12, -8, 34, -50, 7, 0, 22, -17, 45, -23,
//     3, -1, 39, -12, 8, 14, -37, 27, -5, 50
// ];

// function selectionSort(arr) {
//     for (let x = 0; x < arr.length; x++) {
//         let indexMin = x;
//         for (let y = x + 1; y < arr.length; y++) {
//             if (arr[y] < arr[indexMin]) {
//                 indexMin = y;
//             }
//         }
//         let tmp = arr[x];
//         arr[x] = arr[indexMin];
//         arr[indexMin] = tmp;
//     }
//     return arr;
// }

// console.log(selectionSort(arr));
// =============================================================================
//Bubble Sort
// const testArray = [5, -3, 0, 8, -1, 5, 2, -8, 4, 7, -2, 0, 6, -5, 3];
// const testArray = [1, 3, 5, 2, 6, 7];

// function bubbleSort(arr) {
//     for (let x = 0; x < arr.length; x++) {
//         let swapped = false;
//         for (let y = 0; y < arr.length - 1 - x; y++) {
//             if (arr[y] > arr[y + 1]) {
//                 const temp = arr[y];
//                 arr[y] = arr[y + 1];
//                 arr[y + 1] = temp;
//                 swapped = true;
//             }
//         }
//         if (!swapped) break;
//     }
//     return arr;
// }

// console.log(bubbleSort(testArray));
// =============================================================================
//Recursion
// function factorial(n) {
//     if (n === 1)
//         return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(6));

// function fibonachi(n) {
//     if (n === 1 || n === 2) return 1;
//     return fibonachi(n - 1) + fibonachi(n - 2);
// }
// console.log(fibonachi(8));
// =============================================================================
// const testArray = [5, -3, 0, 8, -1, 5, 2, -8, 4, 7, -2, 0, 6, -5, 3];
// function quickSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }
//     const pivotIndex = Math.floor(array.length / 2);
//     const pivot = array[pivotIndex];
//     const less = [];
//     const greater = [];
//     for (let x = 0; x < array.length; x++) {
//         if (x === pivotIndex) {
//             continue;
//         }
//         if (array[x] < pivot) {
//             less.push(array[x]);
//         }
//         else {
//             greater.push(array[x]);
//         }
//     }
//     return [...quickSort(less), pivot, ...quickSort(greater)];
// }
// console.log(quickSort(testArray));
// =============================================================================
