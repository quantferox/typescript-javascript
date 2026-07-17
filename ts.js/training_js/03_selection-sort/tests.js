/**
 * ============================================================
 *  ТЕСТЫ — Сортировка выбором
 * ============================================================
 * Запуск: node 03_selection-sort/tests.js
 * ============================================================
 */

const { selectionSort, selectionSortDouble } = require('./selectionSort');

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

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

/** Считает количество обменов (для проверки характеристики алгоритма) */
function countSwaps(arr) {
  const a = [...arr];
  const n = a.length;
  let swaps = 0;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      [a[i], a[minIndex]] = [a[minIndex], a[i]];
      swaps++;
    }
  }
  return swaps;
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
console.log('  СОРТИРОВКА ВЫБОРОМ — Тесты корректности');
console.log('══════════════════════════════════════════\n');

console.log('📌 Основная версия (selectionSort):');

test('Обычный массив', () => {
  assertEqual(selectionSort([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
});

test('Уже отсортированный', () => {
  assertEqual(selectionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('Обратный порядок', () => {
  assertEqual(selectionSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

test('Отрицательные числа', () => {
  assertEqual(selectionSort([-3, 1, -7, 4, 0]), [-7, -3, 0, 1, 4]);
});

test('Все одинаковые', () => {
  assertEqual(selectionSort([5, 5, 5, 5]), [5, 5, 5, 5]);
});

test('Один элемент', () => {
  assertEqual(selectionSort([99]), [99]);
});

test('Пустой массив', () => {
  assertEqual(selectionSort([]), []);
});

test('Два элемента', () => {
  assertEqual(selectionSort([2, 1]), [1, 2]);
});

test('Дублирующиеся значения', () => {
  assertEqual(selectionSort([3, 1, 4, 1, 5, 9, 2, 6]), [1, 1, 2, 3, 4, 5, 6, 9]);
});

test('Большой случайный массив корректен', () => {
  const arr = randomArray(500);
  selectionSort(arr);
  assert(isSorted(arr), 'Массив не отсортирован');
});

test('Ключевая характеристика: максимум n-1 обменов', () => {
  // Selection Sort никогда не делает больше n-1 обменов
  for (const size of [10, 50, 100]) {
    const swaps = countSwaps(randomArray(size));
    assert(swaps <= size - 1, `Обменов: ${swaps}, максимум: ${size - 1}`);
  }
});

test('Для уже отсортированного — 0 обменов', () => {
  const swaps = countSwaps(sortedArray(100));
  assert(swaps === 0, `Ожидалось 0 обменов, получили: ${swaps}`);
});

console.log('\n📌 Двойная версия (selectionSortDouble):');

test('Обычный массив', () => {
  assertEqual(selectionSortDouble([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
});

test('Уже отсортированный', () => {
  assertEqual(selectionSortDouble([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('Обратный порядок', () => {
  assertEqual(selectionSortDouble([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

test('Чётное количество элементов', () => {
  assertEqual(selectionSortDouble([6, 2, 8, 1, 4, 7]), [1, 2, 4, 6, 7, 8]);
});

test('Нечётное количество элементов', () => {
  assertEqual(selectionSortDouble([3, 1, 4, 1, 5]), [1, 1, 3, 4, 5]);
});

test('Один элемент', () => {
  assertEqual(selectionSortDouble([7]), [7]);
});

test('Большой случайный массив корректен', () => {
  const arr = randomArray(500);
  selectionSortDouble(arr);
  assert(isSorted(arr), 'Массив не отсортирован');
});

// ─────────────────────────────────────────────────────────────
// ТЕСТЫ ПРОИЗВОДИТЕЛЬНОСТИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  СОРТИРОВКА ВЫБОРОМ — Тесты производительности');
console.log('══════════════════════════════════════════\n');

function measureTime(fn, label) {
  const start = performance.now();
  fn();
  const end = performance.now();
  const ms = (end - start).toFixed(2);
  console.log(`  ⚡ ${label}: ${ms} мс`);
  return parseFloat(ms);
}

console.log('📊 Случайные данные (сравнение версий):');
[1000, 5000, 10000].forEach(size => {
  const arr1 = randomArray(size);
  const arr2 = [...arr1];
  measureTime(() => selectionSort(arr1), `selectionSort       n = ${size.toLocaleString()}`);
  measureTime(() => selectionSortDouble(arr2), `selectionSortDouble n = ${size.toLocaleString()}`);
  console.log('');
});

console.log('📊 Важное наблюдение: одинаковое время на любых данных:');
console.log('   (Selection Sort всегда O(n²), данные не влияют)\n');
[5000].forEach(size => {
  const arrRandom = randomArray(size);
  const arrSorted = sortedArray(size);
  const arrReversed = reversedArray(size);
  measureTime(() => selectionSort(arrRandom), `Случайный       n = ${size.toLocaleString()}`);
  measureTime(() => selectionSort(arrSorted), `Отсортированный n = ${size.toLocaleString()}`);
  measureTime(() => selectionSort(arrReversed), `Обратный        n = ${size.toLocaleString()}`);
});

console.log('\n💡 Вывод: все три времени примерно одинаковые!');
console.log('   В отличие от Bubble/Insertion Sort, входные данные не влияют на Selection Sort.');

// ─────────────────────────────────────────────────────────────
// ИТОГ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log(`  ИТОГ: ${passed} пройдено, ${failed} провалено`);
console.log('══════════════════════════════════════════\n');

if (failed > 0) process.exit(1);
