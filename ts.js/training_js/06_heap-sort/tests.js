/**
 * ============================================================
 *  ТЕСТЫ — Сортировка кучей (Heap Sort)
 * ============================================================
 * Запуск: node 06_heap-sort/tests.js
 * ============================================================
 */

const { heapSort, heapSortIterative, buildMaxHeap } = require('./heapSort');

// ─────────────────────────────────────────────────────────────
// УТИЛИТЫ
// ─────────────────────────────────────────────────────────────

function randomArray(size, max = 100000) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

function sortedArray(size) {
  return Array.from({ length: size }, (_, i) => i);
}

function reversedArray(size) {
  return Array.from({ length: size }, (_, i) => size - i);
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

/**
 * Проверяет, является ли массив корректным Max-Heap
 * Для каждого узла i: arr[i] >= arr[2i+1] и arr[i] >= arr[2i+2]
 */
function isMaxHeap(arr) {
  const n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[i] < arr[left]) return false;
    if (right < n && arr[i] < arr[right]) return false;
  }
  return true;
}

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ ${name}`);
    passed++;
  } catch (e) {
    console.log(`  ❌ ${name}`);
    console.log(`     → ${e.message}`);
    failed++;
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

function assertEqual(a, b) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) throw new Error(`Expected ${aStr} but got ${bStr}`);
}

// ─────────────────────────────────────────────────────────────
// ТЕСТЫ СТРУКТУРЫ КУЧИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  КУЧА (Max-Heap) — Структурные тесты');
console.log('══════════════════════════════════════════\n');

console.log('📌 Проверка структуры Max-Heap (buildMaxHeap):');

test('Корень кучи — максимальный элемент', () => {
  const arr = [3, 1, 4, 1, 5, 9, 2, 6];
  const heap = buildMaxHeap(arr);
  assert(heap[0] === 9, `Корень должен быть 9, получили ${heap[0]}`);
});

test('Куча из [4,10,3,5,1] корректна', () => {
  const heap = buildMaxHeap([4, 10, 3, 5, 1]);
  assert(isMaxHeap(heap), `Не является Max-Heap: [${heap}]`);
});

test('Куча из случайного массива корректна', () => {
  const heap = buildMaxHeap(randomArray(50));
  assert(isMaxHeap(heap), 'Не является Max-Heap');
});

test('Куча из отсортированного массива корректна', () => {
  const heap = buildMaxHeap([1, 2, 3, 4, 5, 6, 7]);
  assert(isMaxHeap(heap), 'Не является Max-Heap');
});

test('Куча из одного элемента', () => {
  const heap = buildMaxHeap([42]);
  assert(isMaxHeap(heap), 'Не является Max-Heap');
  assert(heap[0] === 42, 'Неверный элемент');
});

// ─────────────────────────────────────────────────────────────
// ТЕСТЫ КОРРЕКТНОСТИ СОРТИРОВКИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  СОРТИРОВКА КУЧЕЙ — Тесты корректности');
console.log('══════════════════════════════════════════\n');

const versions = [
  { name: 'heapSort (рекурсивный heapify)',    fn: arr => { heapSort(arr); return arr; } },
  { name: 'heapSortIterative (итеративный heapify)', fn: arr => { heapSortIterative(arr); return arr; } },
];

versions.forEach(({ name, fn }) => {
  console.log(`📌 ${name}:`);

  test('Обычный массив', () => {
    assertEqual(fn([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
  });

  test('Уже отсортированный', () => {
    assertEqual(fn([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  test('Обратный порядок', () => {
    assertEqual(fn([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
  });

  test('Отрицательные числа', () => {
    assertEqual(fn([-3, 1, -7, 4, 0]), [-7, -3, 0, 1, 4]);
  });

  test('Все одинаковые', () => {
    assertEqual(fn([9, 9, 9, 9]), [9, 9, 9, 9]);
  });

  test('Один элемент', () => {
    assertEqual(fn([100]), [100]);
  });

  test('Пустой массив', () => {
    assertEqual(fn([]), []);
  });

  test('Два элемента', () => {
    assertEqual(fn([2, 1]), [1, 2]);
  });

  test('Дублирующиеся значения', () => {
    assertEqual(fn([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]),
                    [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test('Большой случайный массив', () => {
    const arr = randomArray(2000);
    fn(arr);
    assert(isSorted(arr), 'Массив не отсортирован');
  });

  console.log('');
});

// ─────────────────────────────────────────────────────────────
// ТЕСТЫ ПРОИЗВОДИТЕЛЬНОСТИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  СОРТИРОВКА КУЧЕЙ — Тесты производительности');
console.log('══════════════════════════════════════════\n');

function measureTime(fn, label) {
  const start = performance.now();
  fn();
  const end = performance.now();
  const ms = (end - start).toFixed(2);
  console.log(`  ⚡ ${label}: ${ms} мс`);
  return parseFloat(ms);
}

console.log('📊 Сравнение всех 6 алгоритмов на n=50,000 (случайные данные):');
const bigArr = randomArray(50000);

// Импортируем остальные для сравнения
const { bubbleSortOptimized } = require('../01_bubble-sort/bubbleSort');
const { insertionSort } = require('../02_insertion-sort/insertionSort');
const { selectionSort } = require('../03_selection-sort/selectionSort');
const { quickSortHoare } = require('../04_quicksort/quickSort');
const { mergeSortBottomUp } = require('../05_merge-sort/mergeSort');

console.log('\n  ⚠️  Bubble/Insertion/Selection могут быть медленными...\n');

measureTime(() => heapSort([...bigArr]),            'Heap Sort           ');
measureTime(() => heapSortIterative([...bigArr]),   'Heap Sort Iterative ');
measureTime(() => quickSortHoare([...bigArr]),      'Quicksort (Hoare)   ');
measureTime(() => mergeSortBottomUp([...bigArr]),   'Merge Sort          ');

console.log('\n  (O(n²) алгоритмы на 50K — очень медленно, пробуем n=5,000):\n');
const midArr = randomArray(5000);
measureTime(() => bubbleSortOptimized([...midArr]), 'Bubble Sort  n=5K   ');
measureTime(() => insertionSort([...midArr]),        'Insertion Sort n=5K ');
measureTime(() => selectionSort([...midArr]),        'Selection Sort n=5K ');

console.log('\n📊 Heap Sort стабилен на любых данных (O(n log n) всегда):');
const size = 50000;
measureTime(() => heapSort(randomArray(size)),   'Случайный    n=50K  ');
measureTime(() => heapSort(sortedArray(size)),   'Отсортированный n=50K');
measureTime(() => heapSort(reversedArray(size)), 'Обратный     n=50K  ');

// ─────────────────────────────────────────────────────────────
// ИТОГ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log(`  ИТОГ: ${passed} пройдено, ${failed} провалено`);
console.log('══════════════════════════════════════════\n');

if (failed > 0) process.exit(1);
