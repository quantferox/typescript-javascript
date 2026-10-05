// COOKIES - [1 PCS = 4KB]

// function get_cookies() {
//     const cookies = document.cookie;
//     const cookies_array = cookies.split("; ");
//     const cookies_map = cookies_array.map((cookie) => cookie.split("="));
//     return Object.fromEntries(cookies_map);
// }

// function set_cookies(key, value, ...args) {
//     const cookie = [key, value].join("=");
//     const cookie_args = [cookie, ...args].join(";");
//     document.cookie = cookie_args;
//     return cookie_args;
// }

// function delete_cookie(key) {
//     document.cookie = `${key}=; Max-Age=0;`;
// }

// function clear_cookies() {
//     const cookies = document.cookie.split("; ");
//     for (const cookie of cookies) {
//         const key = cookie.split("=")[0];
//         delete_cookie(key);
//     }
// }
// =============================================================================
// Local Storage ~5-10MB
// localStorage.setItem("localElement", true);
// console.log(localStorage.getItem("localElement"));
// console.log(localStorage.key(0));
// console.log(localStorage.length);
// localStorage.removeItem("localElement");
// localStorage.clear();
// console.log(localStorage);
// =============================================================================
// Session Storage ~5MB (Хранится пока вкладка открыта)
// Аналогичен Local Storage
// =============================================================================
// IndexedDB ~1GB + Постоянно
// Открываем базу с версией 1
// const request = indexedDB.open("MyWebSiteDB", 1);
// request.onupgradeneeded = function(event) {
//   const db = event.target.result;
//   if (!db.objectStoreNames.contains("users")) {
//     const userStore = db.createObjectStore("users", { keyPath: "id" });
//     userStore.createIndex("name", "name", { unique: false });
//   }
// };
// request.onerror = function(event) {
//   console.error("Ошибка при открытии базы:", event.target.error);
// };
// request.onsuccess = function(event) {
//   const db = event.target.result;
//   function addUser(user) {
//     const tx = db.transaction("users", "readwrite");
//     const store = tx.objectStore("users");
//     const req = store.add(user);
//     req.onsuccess = () => console.log("Пользователь добавлен:", user);
//     req.onerror = e => console.error("Ошибка добавления пользователя:", e.target.error);
//   }
//   function getUser(id) {
//     return new Promise((resolve, reject) => {
//       const tx = db.transaction("users", "readonly");
//       const store = tx.objectStore("users");
//       const req = store.get(id);
//       req.onsuccess = () => resolve(req.result);
//       req.onerror = () => reject(req.error);
//     });
//   }
//   function updateUser(user) {
//     const tx = db.transaction("users", "readwrite");
//     const store = tx.objectStore("users");
//     const req = store.put(user); // put обновляет, если ключ уже есть
//     req.onsuccess = () => console.log("Пользователь обновлен:", user);
//     req.onerror = e => console.error("Ошибка обновления пользователя:", e.target.error);
//   }
//   function deleteUser(id) {
//     const tx = db.transaction("users", "readwrite");
//     const store = tx.objectStore("users");
//     const req = store.delete(id);
//     req.onsuccess = () => console.log("Пользователь удалён с id:", id);
//     req.onerror = e => console.error("Ошибка удаления пользователя:", e.target.error);
//   }
//   addUser({ id: 1, name: "Мурад" });
//   getUser(1).then(user => console.log("Получили пользователя:", user));
//   updateUser({ id: 1, name: "Мурад Обновленный" });
//   deleteUser(1);
// };
// =============================================================================
// URL Params / Hash - от 2000 до 12000 [Рекомедовано до 2000 символов] Пока URL не изменён
// =============================================================================
// CacheStorage	Зависит от ОС Постоянно
// CacheStorage — хранит ресурсы (ответы от fetch), кэширует файлы для оффлайна
// caches.open("v1").then(cache => {
//     cache.addAll([
//         "/index.html",
//         "/style.css",
//         "/index.js"
//     ]).then(() => {
//         console.log("Ресурсы добавлены в кэш v1");
//     });
// });
// caches.match("/index.html").then(response => {
//     if (response) {
//         response.text().then(then => {
//             console.log("Содержимое index.html из кэша:", text);
//         });
//     }
//     else {
//         console.log("Ресурс не найден в кэше");
//     }
// });
// caches.delete("v1").then(success => {
//     console.log(success ? "Кэш v1 удалён" : "Ошибка удаления кэша");
// });
// =============================================================================
// System Access API Большой Пока доступ разрешён
// async function openFile() {
//     try {
//         const [fileHandle] = await window.showOpenFilePicker();
//         const file = await fileHandle.getFile();
//         const text = await file.text();
//         console.log("Содержимое файла:", text);
//     }
//     catch (e) {
//         console.error("Ошибка выбора файла или чтения:", e);
//     }
// }
// document.getElementById("picker").addEventListener("click", openFile);
// =============================================================================
// BroadcastChannel - Пока вкладка открыта
// const bc = new BroadcastChannel("my_channel");
// bc.postMessage("Привет из вкладки");
// bc.onmessage = (event) => {
//     console.log("Получено сообщение:", event.data);
// };
// =============================================================================
// SharedWorker storage
// let connections = 0;

// onconnect = function(e) {
//   const port = e.ports[0];
//   connections++;
//   port.postMessage('Подключено клиентов: ' + connections);

//   port.onmessage = function(event) {
//     console.log('Сообщение от клиента:', event.data);
//     port.postMessage('Ответ: ' + event.data);
//   }
// };
// const worker = new SharedWorker('shared-worker.js');
// worker.port.start();
// worker.port.onmessage = (event) => {
//   console.log('Ответ от воркера:', event.data);
// };
// worker.port.postMessage('Привет воркер!');
// =============================================================================
// StorageManager API
// async function checkStorage() {
//   if ('storage' in navigator && 'estimate' in navigator.storage) {
//     const estimate = await navigator.storage.estimate();
//     console.log(`Использовано: ${estimate.usage} байт`);
//     console.log(`Квота: ${estimate.quota} байт`);
//   } else {
//     console.log('StorageManager API не поддерживается');
//   }
// }
// checkStorage();
// =============================================================================
// DOM Attributes - тоже является памятью но пока элемент находится в DOM
// const div = document.createElement("div");
// div.dataset.value = "123";
// console.log(div);
// =============================================================================
// ⭐	Push / Background Sync-- - Пока разрешено	❌ Нет	Через SW	self.addEventListener('sync', ...)
// В service-worker.js
// // Слушаем событие background sync с тегом 'sync-data'
// self.addEventListener('sync', event => {
//   if (event.tag === 'sync-data') {
//     event.waitUntil(doSomeBackgroundSync());
//   }
// });
// async function doSomeBackgroundSync() {
//   // Здесь, например, отправляем данные на сервер
//   try {
//     const response = await fetch('/api/sync', {
//       method: 'POST',
//       body: JSON.stringify({ data: 'some data' }),
//     });
//     console.log('Background sync прошёл успешно', response);
//   } catch (err) {
//     console.error('Background sync ошибка', err);
//   }
// }
// Чтобы зарегистрировать sync-запрос из страницы:
// navigator.serviceWorker.ready.then(swRegistration => {
//   return swRegistration.sync.register('sync-data');
// });
// =============================================================================
// Service Worker state-- - Пока SW жив	❌ Нет	Внутри self	self.myCache = { ...}
// Service Worker живет постоянно (пока не выгрузится), можно хранить в нем состояние, например:

// js
// Копировать
// Редактировать
// // service-worker.js
// self.myCache = self.myCache || {};

// self.addEventListener('message', event => {
//   // Обновим состояние
//   self.myCache[event.data.key] = event.data.value;
//   console.log('Обновлено состояние в SW:', self.myCache);
// });

// // Получить состояние можно по запросу
// self.addEventListener('fetch', event => {
//   if (event.request.url.endsWith('/get-state')) {
//     event.respondWith(
//       new Response(JSON.stringify(self.myCache), {
//         headers: { 'Content-Type': 'application/json' },
//       })
//     );
//   }
// });
// На странице:

// js
// Копировать
// Редактировать
// navigator.serviceWorker.controller.postMessage({ key: 'count', value: 42 });

// fetch('/get-state').then(res => res.json()).then(console.log);
// =============================================================================
// Storage Foundation API	Большой	Пока доступ	❌ Нет	navigator.storage.getDirectory()(эксперимент)

// async function openDirectory() {
//     if ('storage' in navigator && 'getDirectory' in navigator.storage) {
//         try {
//             const dirHandle = await navigator.storage.getDirectory();
//             console.log('Доступ к директории:', dirHandle);

//             // Можно прочитать содержимое
//             for await (const entry of dirHandle.values()) {
//                 console.log('Файл или папка:', entry.name, entry.kind);
//             }
//         } catch (e) {
//             console.error('Ошибка доступа к директории:', e);
//         }
//     } else {
//         console.log('Storage Foundation API не поддерживается');
//     }
// }

// openDirectory();

// =============================================================================
// Краткий пример WebSQL
// const db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
// db.transaction(tx => {
//   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
//   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "Первое сообщение")');
//   tx.executeSql('SELECT * FROM LOGS', [], (tx, results) => {
//     for (let i = 0; i < results.rows.length; i++) {
//       console.log(results.rows.item(i).log);
//     }
//   });
// });
