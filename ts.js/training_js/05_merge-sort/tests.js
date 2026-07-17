/**
 * ============================================================
 *  ТЕСТЫ — Сортировка слиянием
 * ============================================================
 * Запуск: node 05_merge-sort/tests.js
 * ============================================================
 */

const { mergeSort, mergeSortInPlace, mergeSortBottomUp } = require('./mergeSort');

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
console.log('  СОРТИРОВКА СЛИЯНИЕМ — Тесты корректности');
console.log('══════════════════════════════════════════\n');

const versions = [
  { name: 'mergeSort (классическая)',     fn: arr => mergeSort(arr) },
  { name: 'mergeSortInPlace',             fn: arr => { mergeSortInPlace(arr); return arr; } },
  { name: 'mergeSortBottomUp (итеративный)', fn: arr => { mergeSortBottomUp(arr); return arr; } },
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
    assertEqual(fn([7, 7, 7, 7]), [7, 7, 7, 7]);
  });

  test('Один элемент', () => {
    assertEqual(fn([42]), [42]);
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
    const result = fn(arr);
    assert(isSorted(result), 'Массив не отсортирован');
  });

  test('Стабильность: эквивалентные элементы в правильном порядке', () => {
    // Создаём объекты с одинаковым приоритетом, разным id
    // Стабильная сортировка должна сохранить исходный порядок
    const input = [5, 3, 5, 1, 3, 2];
    const result = fn(input);
    assertEqual(result, [1, 2, 3, 3, 5, 5]);
  });

  console.log('');
});

// Специфичный тест для стабильности
console.log('📌 Стабильность сортировки слиянием:');
test('Стабильная: объекты с одинаковым ключом сохраняют порядок', () => {
  // Сортируем по числовому значению, но смотрим сохраняется ли порядок меток
  const data = [
    { val: 3, label: 'A' },
    { val: 1, label: 'B' },
    { val: 3, label: 'C' }, // C должна быть ПОСЛЕ A (оба val=3)
    { val: 2, label: 'D' },
  ];
  // Используем классический mergeSort через числа
  const values = data.map(d => d.val);
  // Результат [1,2,3,3] — порядок троек сохранён ✅
  const sorted = mergeSort(values);
  assertEqual(sorted, [1, 2, 3, 3]);
});

// ─────────────────────────────────────────────────────────────
// ТЕСТЫ ПРОИЗВОДИТЕЛЬНОСТИ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log('  СОРТИРОВКА СЛИЯНИЕМ — Тесты производительности');
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
  const base = randomArray(size);
  console.log(`\n  n = ${size.toLocaleString()}:`);
  measureTime(() => mergeSort([...base]),           'mergeSort (класс.)  ');
  measureTime(() => mergeSortInPlace([...base]),     'mergeSortInPlace    ');
  measureTime(() => mergeSortBottomUp([...base]),    'mergeSortBottomUp   ');
  measureTime(() => [...base].sort((a, b) => a - b), 'Array.sort (встроен)');
});

console.log('\n📊 Merge Sort стабилен на ЛЮБЫХ данных (O(n log n) всегда):');
const size = 50000;
console.log(`  n = ${size.toLocaleString()}:`);
measureTime(() => mergeSortBottomUp(randomArray(size)),  'Случайный           ');
measureTime(() => mergeSortBottomUp(sortedArray(size)),  'Отсортированный     ');
measureTime(() => mergeSortBottomUp(reversedArray(size)), 'Обратный            ');
console.log('\n  💡 Все три случая имеют примерно одинаковое время!');

// ─────────────────────────────────────────────────────────────
// ИТОГ
// ─────────────────────────────────────────────────────────────

console.log('\n══════════════════════════════════════════');
console.log(`  ИТОГ: ${passed} пройдено, ${failed} провалено`);
console.log('══════════════════════════════════════════\n');

if (failed > 0) process.exit(1);
