// bracket test js + FIFO or LIFO

// /**
//  * checkBrackets - check Brackets
//  * @param {String} str 
//  */
// function checkBrackets(str) {
// 	if (!str.length)
// 		return true;

// 	brackets = {
// 		"(": ")",
// 		"[": "]",
// 		"{": "}"
// 	};

// 	stack = [];

// 	for (let idx = 0; idx < str.length; idx++) {
// 		const bracket = str[idx];
// 		if (brackets[bracket]) {
// 			stack.push(bracket);
// 		}
// 		else if (Object.values(brackets).includes(bracket)) {
// 			if (stack.length === 0)
// 				return false;
// 			const top = stack.pop();
// 			if (brackets[top] !== bracket) {
// 				return false;
// 			}
// 		}
// 	}
// 	return stack.length === 0;
// }

// console.log(checkBrackets("{{(([}](}}")); // false
// console.log(checkBrackets("(){}[]"));     // true
// console.log(checkBrackets("{[()()][]}")); // true
// console.log(checkBrackets("((()))"));     // true
// console.log(checkBrackets("([)]"));       // false
// console.log(checkBrackets("{[}"));        // false
// =============================================================================

// function retryFetch(url, { retryCount, timeout }) {
// 	let lastError = null;

// 	const fetchTimeout = () =>{
// 		return new Promise((resolve, reject)=>{
// 			const controller = new AbortController();

// 			const timeoutId = setTimeout(()=>{
// 				controller.abort();
// 				reject(new Error("Timeout: fetch aborted!"));
// 			}, timeout);

// 			fetch(url, {signal: controller.signal})
// 			.then((response)=>{
// 				clearTimeout(timeoutId);
// 				if(response.ok){
// 					resolve(response.json());
// 				}
// 				else{
// 					reject(new Error("Fetch then: Non-200 response"));
// 				}
// 			}).catch((error)=>{
// 				clearTimeout(timeoutId);
// 				reject(`Fetch: ${error}`);
// 			})
// 		});
// 	}

// 	const fetchAttempt = (triesLeft) =>{
// 		return fetchTimeout()
// 		.then((response)=>console.log(response))
// 		.catch((error)=>{
// 			lastError = error;
// 			if(triesLeft > 0){
// 				return fetchAttempt(triesLeft - 1)
// 			}
// 			else{
// 				throw Error(lastError);
// 			}
// 		});
// 	}

// 	return fetchAttempt(retryCount);
// }

// console.log(retryFetch(
// 	"https://jsonplaceholder.typicode.com/users",
// 	{ retryCount: 5, timeout: 80 }
// ));

// =============================================================================

// // Mutable - AZN
// let limits = {
// 	500: 1,
// 	200: 1,
// 	100: 1,
// 	50: 0,
// 	20: 5,
// 	10: 3,
// 	5: 2,
// 	1: 1
// };

// function atm(sum, limits) {
// 	let remaining = sum;
// 	const result = Object.entries(limits)
// 		.sort(([a], [b]) => b - a)
// 		.reduce((acc, [nominal, available]) => {
// 			const count = Math.min(Math.floor(remaining / nominal), limits[nominal]);
// 			if (remaining === 0) return acc;
// 			if (count > 0) {
// 				acc[nominal] = count;
// 				remaining -= count * nominal;
// 				limits[nominal] -= count;
// 			}
// 			return acc;
// 		}, {});
// 	if (remaining > 0) {
// 		return "В АТМ нет денег...";
// 	} else {
// 		return result;
// 	}
// }

// // console.log(atm(1855, limits));
// // console.log(atm(211,limits));
// console.log(limits)
// console.log(atm(199,limits));
// // console.log(atm(55,limits));
// // console.log(atm(1855, limits));
// // console.log(atm(1855, limits));
// // console.log(limits);
// =============================================================================
// const tickets = [
// 	{ from: "Калининград", to: "Челябинск" },
// 	{ from: "Москва", to: "Калининград" },
// 	{ from: "Пятигорск", to: "Краснодар" },
// 	{ from: "Челябинск", to: "Астана" },
// 	{ from: "Краснодар", to: "Москва" },
// ];

// function sortTickets(tickets) {
// 	const tickets_map = new Map();
// 	const destinations = new Set();

// 	for (const ticket of tickets) {
// 		tickets_map.set(ticket.from, ticket.to);
// 		destinations.add(ticket.to);
// 	}

// 	let start = null;
// 	for (const ticket of tickets) {
// 		if (!destinations.has(ticket.from)) {
// 			start = ticket.from;
// 			break;
// 		}
// 	}

// 	let current = start;
// 	const result = [];
// 	while (tickets_map.has(current)) {
// 		const next = tickets_map.get(current);
// 		result.push({ from: current, to: next });
// 		current = next;
// 	}

// 	return result;

// }

// console.log(sortTickets(tickets));

//Ограничение по памяти нет
//Ограничение по сложности - O(n)
// const tickets = [
// 	{ from: "Пятигорск", to: "Краснодар" },
// 	{ from: "Краснодар", to: "Москва" },
// 	{ from: "Москва", to: "Калининград" },
// 	{ from: "Калининград", to: "Челябинск" },
// 	{ from: "Челябинск", to: "Астана" },
// ];
// =============================================================================
// 1xx — Информационные (Informational)
// Код	Название
// 100	Continue
// 101	Switching Protocols
// 102	Processing (WebDAV)
// 103	Early Hints

// 2xx — Успешные (Success)
// Код	Название
// 200	OK
// 201	Created
// 202	Accepted
// 203	Non-Authoritative Information
// 204	No Content
// 205	Reset Content
// 206	Partial Content
// 207	Multi-Status (WebDAV)
// 208	Already Reported (WebDAV)
// 226	IM Used

// 3xx — Перенаправления (Redirection)
// Код	Название
// 300	Multiple Choices
// 301	Moved Permanently
// 302	Found
// 303	See Other
// 304	Not Modified
// 305	Use Proxy (Deprecated)
// 306	(Unused)
// 307	Temporary Redirect
// 308	Permanent Redirect

// 4xx — Ошибки клиента (Client Error)
// Код	Название
// 400	Bad Request
// 401	Unauthorized
// 402	Payment Required (Reserved)
// 403	Forbidden
// 404	Not Found
// 405	Method Not Allowed
// 406	Not Acceptable
// 407	Proxy Authentication Required
// 408	Request Timeout
// 409	Conflict
// 410	Gone
// 411	Length Required
// 412	Precondition Failed
// 413	Payload Too Large
// 414	URI Too Long
// 415	Unsupported Media Type
// 416	Range Not Satisfiable
// 417	Expectation Failed
// 418	I'm a teapot (RFC 2324)
// 421	Misdirected Request
// 422	Unprocessable Entity (WebDAV)
// 423	Locked (WebDAV)
// 424	Failed Dependency (WebDAV)
// 425	Too Early
// 426	Upgrade Required
// 428	Precondition Required
// 429	Too Many Requests
// 431	Request Header Fields Too Large
// 451	Unavailable For Legal Reasons

// 5xx — Ошибки сервера (Server Error)
// Код	Название
// 500	Internal Server Error
// 501	Not Implemented
// 502	Bad Gateway
// 503	Service Unavailable
// 504	Gateway Timeout
// 505	HTTP Version Not Supported
// 506	Variant Also Negotiates
// 507	Insufficient Storage (WebDAV)
// 508	Loop Detected (WebDAV)
// 510	Not Extended
// 511	Network Authentication Required

// Неофициальные и специфические коды
// Код	Название
// 419	Authentication Timeout
// 420	Enhance Your Calm (Twitter)
// 426	Upgrade Required
// 429	Too Many Requests
// 444	No Response (Nginx)
// 449	Retry With (Microsoft)
// 450	Blocked by Windows Parental Controls
// 498	Invalid Token (Esri)
// 499	Client Closed Request (Nginx)
// 509	Bandwidth Limit Exceeded (Apache/cPanel)
// 520	Web Server Returned an Unknown Error (Cloudflare)
// 521	Web Server Is Down (Cloudflare)
// 522	Connection Timed Out (Cloudflare)
// 523	Origin Is Unreachable (Cloudflare)
// 524	A Timeout Occurred (Cloudflare)
// 525	SSL Handshake Failed (Cloudflare)
// 526	Invalid SSL Certificate (Cloudflare)
// 527	Railgun Error (Cloudflare)
// 530	Site is Frozen (Pantheon)

// -REQUEST TYPES
// 🌐 Основные типы HTTP-запросов:
// Метод	Название	Описание
// GET	Получить	Запрашивает данные с сервера без их изменения.
// POST	Отправить	Создает новый ресурс или отправляет данные на сервер.
// PUT	Заменить	Полностью заменяет существующий ресурс на сервере.
// PATCH	Частичное изменение	Обновляет часть ресурса на сервере.
// DELETE	Удалить	Удаляет указанный ресурс на сервере.
// HEAD	Заголовки	Запрашивает заголовки ресурса без его содержимого.
// OPTIONS	Опции	Возвращает методы, поддерживаемые сервером.
// CONNECT	Подключение	Устанавливает туннель к серверу (обычно для HTTPS).
// TRACE	Трассировка	Возвращает запрос как есть для отладки.

// 🌐 Менее распространенные или расширенные методы:
// Метод	Название	Описание
// LINK	Связать	Создает ссылку между ресурсами. (устарел)
// UNLINK	Разорвать связь	Удаляет ссылку между ресурсами. (устарел)
// PURGE	Очистить кэш	Используется для очистки кэша на серверах.
// LOCK	Заблокировать (WebDAV)	Блокирует ресурс для редактирования.
// UNLOCK	Разблокировать (WebDAV)	Снимает блокировку с ресурса.
// PROPFIND	Поиск свойств (WebDAV)	Запрашивает свойства ресурса.
// VIEW	Просмотр	Используется на некоторых серверах для получения данных.
// COPY	Копировать (WebDAV)	Создает копию ресурса.
// MOVE	Переместить (WebDAV)	Перемещает ресурс в другое место.
// MKCOL	Создать коллекцию (WebDAV)	Создает коллекцию (папку).
// REPORT	Отчет (WebDAV)	Создает отчет на основе запроса.
// SEARCH	Поиск (WebDAV)	Ищет ресурс на сервере.
// PATCH	Частичное обновление	Частично изменяет ресурс.
// MERGE	Объединение (WebDAV)	Объединяет изменения в ресурс.
// NOTIFY	Уведомление	Отправляет уведомление.
// SUBSCRIBE	Подписка	Подписывает клиента на события (обычно WebSocket).
// UNSUBSCRIBE	Отмена подписки	Отменяет подписку.