/**
 * ============================================================
 *  ТЕСТЫ — Сортировка пузырьком
 * ============================================================
 * Запуск: node 01_bubble-sort/tests.js
 * ============================================================
 */

const { bubbleSort, bubbleSortOptimized } = require('./bubbleSort');

// ─────────────────────────────────────────────────────────────
// УТИЛИТЫ
// ─────────────────────────────────────────────────────────────

/** Генерирует массив случайных чисел заданного размера */
function randomArray(size, max = 10000) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

/** Генерирует уже отсортированный массив */
function sortedArray(size) {
  return Array.from({ length: size }, (_, i) => i);
}

/** Генерирует обратно отсортированный массив (худший случай) */
function reversedArray(size) {
  return Array.from({ length: size }, (_, i) => size - i);
}

/** Проверяет, что массив отсортирован по возрастанию */
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

/** Простой тест-раннер */
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
console.log('  СОРТИРОВКА ПУЗЫРЬКОМ — Тесты корректности');
console.log('══════════════════════════════════════════\n');

// --- Базовая версия ---
console.log('📌 Базовая версия (bubbleSort):');

test('Обычный массив', () => {
  assertEqual(bubbleSort([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
});

test('Уже отсортированный массив', () => {
  assertEqual(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('Обратно отсортированный (худший случай)', () => {
  assertEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

test('Массив с одинаковыми элементами', () => {
  assertEqual(bubbleSort([3, 3, 3, 3]), [3, 3, 3, 3]);
});

test('Массив с отрицательными числами', () => {
  assertEqual(bubbleSort([-3, 1, -7, 4, 0]), [-7, -3, 0, 1, 4]);
});

test('Массив из одного элемента', () => {
  assertEqual(bubbleSort([42]), [42]);
});

test('Пустой массив', () => {
  assertEqual(bubbleSort([]), []);
});

test('Два элемента — не по порядку', () => {
  assertEqual(bubbleSort([2, 1]), [1, 2]);
});

test('Два элемента — уже по порядку', () => {
  assertEqual(bubbleSort([1, 2]), [1, 2]);
});

test('Массив с дубликатами', () => {
  assertEqual(bubbleSort([4, 2, 4, 1, 2]), [1, 2, 2, 4, 4]);
});

test('Стабильность: порядок одинаковых элементов сохраняется', () => {
  // Проверяем что результат совпадает с эталоном
  const result = bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5]);
  assertEqual(result, [1, 1, 2, 3, 4, 5, 5, 6, 9]);
});

// --- Оптимизированная версия ---
console.log('\n📌 Оптимизированная версия (bubbleSortOptimized):');

test('Обычный массив', () => {
  assertEqual(bubbleSortOptimized([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
});

test('Уже отсортированный — ранняя остановка', () => {
  assertEqual(bubbleSortOptimized([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('Один элемент', () => {
  assertEqual(bubbleSortOptimized([7]), [7]);
});

test('Пустой массив', () => {
  assertEqual(bubbleSortOptimized([]), []);
});

test('Случайный массив из 100 элементов корректно сортируется', () => {
  const arr = randomArray(100);
  bubbleSortOptimized(arr);
  assert(isSorted(arr), 'Массив не отсортирован');
});

// ─────────────────────────────────────────────────────────────
// ТЕСТЫ ПРОИЗВОДИТЕЛЬНОСТИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  СОРТИРОВКА ПУЗЫРЬКОМ — Тесты производительности');
console.log('══════════════════════════════════════════\n');

function measureTime(fn, label) {
  const start = performance.now();
  fn();
  const end = performance.now();
  const ms = (end - start).toFixed(2);
  console.log(`  ⚡ ${label}: ${ms} мс`);
  return parseFloat(ms);
}

console.log('📊 Случайные данные (bubbleSortOptimized):');
[1000, 5000, 10000].forEach(size => {
  const arr = randomArray(size);
  measureTime(() => bubbleSortOptimized(arr), `n = ${size.toLocaleString()}`);
});

console.log('\n📊 Уже отсортированные данные (оптимизация работает!):');
[1000, 10000, 50000].forEach(size => {
  const arr = sortedArray(size);
  measureTime(() => bubbleSortOptimized(arr), `n = ${size.toLocaleString()} (уже отсорт.)`);
});

console.log('\n📊 Обратно отсортированные данные (худший случай):');
[1000, 5000, 10000].forEach(size => {
  const arr = reversedArray(size);
  measureTime(() => bubbleSortOptimized(arr), `n = ${size.toLocaleString()} (обратный порядок)`);
});

// ─────────────────────────────────────────────────────────────
// ИТОГ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log(`  ИТОГ: ${passed} пройдено, ${failed} провалено`);
console.log('══════════════════════════════════════════\n');

if (failed > 0) process.exit(1);
