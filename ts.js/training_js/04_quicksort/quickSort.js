/**
 * ============================================================
 *  БЫСТРАЯ СОРТИРОВКА (Quicksort)
 * ============================================================
 *
 * ИДЕЯ (стратегия "разделяй и властвуй"):
 *   Вместо того чтобы сортировать весь массив сразу,
 *   мы используем стратегию "разделяй и властвуй":
 *
 *   1. Выбираем один элемент — "опорный" (pivot).
 *   2. Перегруппируем массив: всё меньше pivot — слева,
 *      всё больше pivot — справа. Это называется "разбиение" (partition).
 *   3. Рекурсивно сортируем левую и правую части.
 *
 * АНАЛОГИЯ:
 *   Представь, что тебе нужно упорядочить стопку книг по размеру.
 *   Берёшь одну книгу как "эталон" (pivot).
 *   Кладёшь все книги тоньше — слева от неё.
 *   Все толще — справа.
 *   Теперь у тебя три части: левая, эталон, правая.
 *   Эталон уже стоит РОВНО на своём месте!
 *   Теперь повторяешь процедуру для левой и правой частей.
 *
 * ПРИМЕР (шаг за шагом):
 *   Входной массив: [3, 6, 8, 10, 1, 2, 1]
 *   pivot = 1 (последний элемент)
 *
 *   Разбиение:
 *     Всё ≤ 1: [1, 1] | pivot: [1] | всё > 1: [3, 6, 8, 10, 2]
 *   Рекурсия:
 *     [1,1] → уже отсортировано
 *     [3,6,8,10,2] → pivot=2 → [] | [2] | [3,6,8,10]
 *       [3,6,8,10] → pivot=10 → [3,6,8] | [10] | []
 *         [3,6,8] → pivot=8 → [3,6] | [8] | []
 *           [3,6] → pivot=6 → [3] | [6] | []
 *   Результат: [1, 1, 2, 3, 6, 8, 10]
 *
 * ВЫБОР PIVOT:
 *   - Последний элемент (просто, но плохо на отсортированных данных)
 *   - Случайный элемент (защита от худшего случая)
 *   - Медиана трёх (первый, средний, последний) — используют в реальных реализациях
 *
 * СЛОЖНОСТЬ:
 *   Время:   O(n log n) — средний и лучший случай
 *            O(n²)      — худший (если pivot всегда минимальный/максимальный)
 *   Память:  O(log n)   — стек рекурсии
 *   Стабильность: НЕТ
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
// ВЕРСИЯ 1: Простая (создаёт новые массивы — не in-place)
// ─────────────────────────────────────────────────────────────

/**
 * Простая Quicksort — создаёт новые массивы на каждом шаге.
 * Хороша для понимания алгоритма, но использует O(n) памяти.
 *
 * @param {number[]} arr
 * @returns {number[]} новый отсортированный массив
 */
function quickSortSimple(arr) {
  // Базовый случай: массив из 0 или 1 элемента уже отсортирован
  if (arr.length <= 1) return arr;

  // Выбираем pivot (средний элемент — простой выбор)
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // Разделяем на три части
  const left = arr.filter((x, i) => i !== pivotIndex && x <= pivot);
  const right = arr.filter((x, i) => i !== pivotIndex && x > pivot);

  // Рекурсивно сортируем и объединяем
  return [...quickSortSimple(left), pivot, ...quickSortSimple(right)];
}

// ─────────────────────────────────────────────────────────────
// ВЕРСИЯ 2: In-place с разделением по Ломуто
// ─────────────────────────────────────────────────────────────

/**
 * Разбиение Ломуто (Lomuto partition scheme)
 *
 * Принцип:
 *   - Последний элемент = pivot
 *   - i = указатель на "зону меньших" элементов
 *   - Проходим j по массиву; если arr[j] <= pivot, расширяем зону
 *   - В конце ставим pivot на своё место (i + 1)
 *
 * Визуализация:
 *   [3, 1, 4, 1, 5, 2]  pivot = 2
 *    i=0
 *    j=0: arr[0]=3 > 2 → не трогаем
 *    j=1: arr[1]=1 ≤ 2 → i++, swap(i,j) → [1, 3, 4, 1, 5, 2], i=1
 *    j=2: arr[2]=4 > 2 → не трогаем
 *    j=3: arr[3]=1 ≤ 2 → i++, swap(i,j) → [1, 1, 4, 3, 5, 2], i=2
 *    j=4: arr[4]=5 > 2 → не трогаем
 *    Финал: swap(i+1, pivot) → [1, 1, 2, 3, 5, 4]
 *    pivot (2) на позиции 2 ✅
 */
function partitionLomuto(arr, low, high) {
  const pivot = arr[high]; // pivot = последний элемент
  let i = low - 1;          // i = граница "малых" элементов

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // расширяем зону малых
    }
  }

  // Ставим pivot на своё место (между малыми и большими)
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1; // возвращаем позицию pivot
}

/**
 * Quicksort in-place (разбиение Ломуто)
 *
 * @param {number[]} arr
 * @param {number} low - левая граница
 * @param {number} high - правая граница
 * @returns {number[]}
 */
function quickSortLomuto(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Разбиваем массив и получаем позицию pivot
    const pivotPos = partitionLomuto(arr, low, high);

    // Рекурсивно сортируем части до и после pivot
    quickSortLomuto(arr, low, pivotPos - 1);
    quickSortLomuto(arr, pivotPos + 1, high);
  }

  return arr;
}

// ─────────────────────────────────────────────────────────────
// ВЕРСИЯ 3: In-place с разделением по Хоару (быстрее на практике)
// ─────────────────────────────────────────────────────────────

/**
 * Разбиение Хоара (Hoare partition scheme)
 *
 * Придумал сам Хоар, автор алгоритма.
 * Использует два указателя, движущихся навстречу.
 * В среднем делает в 3 раза меньше обменов, чем Ломуто.
 *
 * Принцип:
 *   - pivot = первый элемент
 *   - i идёт слева → пока arr[i] < pivot
 *   - j идёт справа ← пока arr[j] > pivot
 *   - Когда оба остановились → если i < j → меняем arr[i] и arr[j]
 *   - Повторяем до пересечения i и j
 */
function partitionHoare(arr, low, high) {
  const pivot = arr[Math.floor((low + high) / 2)]; // pivot = средний
  let i = low - 1;
  let j = high + 1;

  while (true) {
    do { i++; } while (arr[i] < pivot); // i движется вправо
    do { j--; } while (arr[j] > pivot); // j движется влево

    if (i >= j) return j; // указатели пересеклись

    [arr[i], arr[j]] = [arr[j], arr[i]]; // меняем
  }
}

/**
 * Quicksort in-place (разбиение Хоара)
 *
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 * @returns {number[]}
 */
function quickSortHoare(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotPos = partitionHoare(arr, low, high);
    quickSortHoare(arr, low, pivotPos);
    quickSortHoare(arr, pivotPos + 1, high);
  }

  return arr;
}

// ─────────────────────────────────────────────────────────────
// ВЕРСИЯ 4: Quicksort со случайным pivot (защита от O(n²))
// ─────────────────────────────────────────────────────────────

/**
 * Randomized Quicksort — выбирает случайный pivot.
 * Это защищает от намеренно "плохих" входных данных
 * и делает O(n²) крайне маловероятным.
 *
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 * @returns {number[]}
 */
function quickSortRandom(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Выбираем случайный pivot и помещаем его в конец
    const randomIndex = low + Math.floor(Math.random() * (high - low + 1));
    [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]];

    const pivotPos = partitionLomuto(arr, low, high);
    quickSortRandom(arr, low, pivotPos - 1);
    quickSortRandom(arr, pivotPos + 1, high);
  }

  return arr;
}

module.exports = {
  quickSortSimple,
  quickSortLomuto,
  quickSortHoare,
  quickSortRandom,
};
