/**
 * ============================================================
 *  ТЕСТЫ — Сортировка вставками
 * ============================================================
 * Запуск: node 02_insertion-sort/tests.js
 * ============================================================
 */

const { insertionSort, insertionSortBinary } = require('./insertionSort');

// ─────────────────────────────────────────────────────────────
// УТИЛИТЫ
// ─────────────────────────────────────────────────────────────

function randomArray(size, max = 10000) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

function sortedArray(size) {
  return Array.from({ length: size }, (_, i) => i);
}

function reversedArray(size) {
  return Array.from({ length: size }, (_, i) => size - i);
}

/** Почти отсортированный: несколько случайных обменов */
function nearlySortedArray(size) {
  const arr = sortedArray(size);
  const swaps = Math.floor(size * 0.05); // 5% элементов перемешиваем
  for (let i = 0; i < swaps; i++) {
    const a = Math.floor(Math.random() * size);
    const b = Math.floor(Math.random() * size);
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
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
// ТЕСТЫ КОРРЕКТНОСТИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  СОРТИРОВКА ВСТАВКАМИ — Тесты корректности');
console.log('══════════════════════════════════════════\n');

console.log('📌 Основная версия (insertionSort):');

test('Обычный массив', () => {
  assertEqual(insertionSort([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
});

test('Уже отсортированный', () => {
  assertEqual(insertionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('Обратный порядок', () => {
  assertEqual(insertionSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

test('Отрицательные числа', () => {
  assertEqual(insertionSort([-5, 0, -3, 2, -1]), [-5, -3, -1, 0, 2]);
});

test('Все одинаковые', () => {
  assertEqual(insertionSort([7, 7, 7, 7]), [7, 7, 7, 7]);
});

test('Один элемент', () => {
  assertEqual(insertionSort([42]), [42]);
});

test('Пустой массив', () => {
  assertEqual(insertionSort([]), []);
});

test('Дублирующиеся значения', () => {
  assertEqual(insertionSort([3, 1, 2, 1, 3]), [1, 1, 2, 3, 3]);
});

test('Два элемента в неверном порядке', () => {
  assertEqual(insertionSort([2, 1]), [1, 2]);
});

test('Большой случайный массив корректен', () => {
  const arr = randomArray(500);
  insertionSort(arr);
  assert(isSorted(arr), 'Массив не отсортирован');
});

console.log('\n📌 Версия с бинарным поиском (insertionSortBinary):');

test('Обычный массив', () => {
  assertEqual(insertionSortBinary([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
});

test('Уже отсортированный', () => {
  assertEqual(insertionSortBinary([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('Отрицательные числа', () => {
  assertEqual(insertionSortBinary([-5, 0, -3, 2, -1]), [-5, -3, -1, 0, 2]);
});

test('Пустой массив', () => {
  assertEqual(insertionSortBinary([]), []);
});

test('Большой случайный массив корректен', () => {
  const arr = randomArray(500);
  insertionSortBinary(arr);
  assert(isSorted(arr), 'Массив не отсортирован');
});

// ─────────────────────────────────────────────────────────────
// ТЕСТЫ ПРОИЗВОДИТЕЛЬНОСТИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  СОРТИРОВКА ВСТАВКАМИ — Тесты производительности');
console.log('══════════════════════════════════════════\n');

function measureTime(fn, label) {
  const start = performance.now();
  fn();
  const end = performance.now();
  const ms = (end - start).toFixed(2);
  console.log(`  ⚡ ${label}: ${ms} мс`);
  return parseFloat(ms);
}

console.log('📊 Случайные данные:');
[1000, 5000, 10000].forEach(size => {
  const arr1 = randomArray(size);
  const arr2 = [...arr1];
  measureTime(() => insertionSort(arr1), `insertionSort       n = ${size.toLocaleString()}`);
  measureTime(() => insertionSortBinary(arr2), `insertionSortBinary n = ${size.toLocaleString()}`);
  console.log('');
});

console.log('📊 Почти отсортированные данные (сильная сторона Insertion Sort!):');
[1000, 10000, 50000].forEach(size => {
  const arr = nearlySortedArray(size);
  measureTime(() => insertionSort(arr), `n = ${size.toLocaleString()} (почти готов)`);
});

console.log('\n📊 Полностью отсортированные данные (лучший случай O(n)):');
[1000, 10000, 50000].forEach(size => {
  const arr = sortedArray(size);
  measureTime(() => insertionSort(arr), `n = ${size.toLocaleString()} (уже отсортирован)`);
});

console.log('\n📊 Обратный порядок (худший случай O(n²)):');
[1000, 5000, 10000].forEach(size => {
  const arr = reversedArray(size);
  measureTime(() => insertionSort(arr), `n = ${size.toLocaleString()} (обратный порядок)`);
});

// ─────────────────────────────────────────────────────────────
// ИТОГ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log(`  ИТОГ: ${passed} пройдено, ${failed} провалено`);
console.log('══════════════════════════════════════════\n');

if (failed > 0) process.exit(1);
