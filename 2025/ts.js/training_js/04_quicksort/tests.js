/**
 * ============================================================
 *  ТЕСТЫ — Быстрая сортировка (Quicksort)
 * ============================================================
 * Запуск: node 04_quicksort/tests.js
 * ============================================================
 */

const {
  quickSortSimple,
  quickSortLomuto,
  quickSortHoare,
  quickSortRandom,
} = require('./quickSort');

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
console.log('  БЫСТРАЯ СОРТИРОВКА — Тесты корректности');
console.log('══════════════════════════════════════════\n');

// Тестируем все 4 версии одинаковыми тестами
const versions = [
  { name: 'quickSortSimple',  fn: arr => quickSortSimple(arr) },
  { name: 'quickSortLomuto',  fn: arr => { quickSortLomuto(arr); return arr; } },
  { name: 'quickSortHoare',   fn: arr => { quickSortHoare(arr); return arr; } },
  { name: 'quickSortRandom',  fn: arr => { quickSortRandom(arr); return arr; } },
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
    assertEqual(fn([3, 3, 3, 3, 3]), [3, 3, 3, 3, 3]);
  });

  test('Один элемент', () => {
    assertEqual(fn([42]), [42]);
  });

  test('Пустой массив', () => {
    assertEqual(fn([]), []);
  });

  test('Дубликаты', () => {
    assertEqual(fn([3, 1, 4, 1, 5, 9, 2, 6, 5]), [1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  test('Большой случайный массив', () => {
    const arr = randomArray(1000);
    const result = fn(arr);
    assert(isSorted(result), 'Массив не отсортирован');
  });

  console.log('');
});

// ─────────────────────────────────────────────────────────────
// ТЕСТЫ ПРОИЗВОДИТЕЛЬНОСТИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  БЫСТРАЯ СОРТИРОВКА — Тесты производительности');
console.log('══════════════════════════════════════════\n');

function measureTime(fn, label) {
  const start = performance.now();
  fn();
  const end = performance.now();
  const ms = (end - start).toFixed(2);
  console.log(`  ⚡ ${label}: ${ms} мс`);
  return parseFloat(ms);
}

console.log('📊 Случайные данные (сравнение реализаций):');
[10000, 100000].forEach(size => {
  console.log(`\n  n = ${size.toLocaleString()}:`);
  const base = randomArray(size);

  measureTime(() => quickSortSimple([...base]), 'Simple (не in-place)');
  measureTime(() => quickSortLomuto([...base]), 'Lomuto (in-place)  ');
  measureTime(() => quickSortHoare([...base]),  'Hoare  (in-place)  ');
  measureTime(() => quickSortRandom([...base]), 'Random pivot       ');
});

console.log('\n📊 Опасный случай для Lomuto (отсортированный массив):');
console.log('   Без случайного pivot → глубокая рекурсия!\n');
[1000, 3000, 5000].forEach(size => {
  const arr = sortedArray(size);
  // Hoare нечувствителен, Random защищён, Lomuto может быть медленным
  measureTime(() => quickSortHoare([...arr]),  `Hoare  n=${size.toLocaleString()} (отсортированный)`);
  measureTime(() => quickSortRandom([...arr]), `Random n=${size.toLocaleString()} (отсортированный)`);
});

console.log('\n📊 Сравнение с встроенной сортировкой JavaScript:');
const bigArr = randomArray(100000);
measureTime(() => quickSortHoare([...bigArr]),        'Наш quickSortHoare    n=100K');
measureTime(() => [...bigArr].sort((a, b) => a - b), 'Array.prototype.sort  n=100K');

// ─────────────────────────────────────────────────────────────
// ИТОГ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log(`  ИТОГ: ${passed} пройдено, ${failed} провалено`);
console.log('══════════════════════════════════════════\n');

if (failed > 0) process.exit(1);
