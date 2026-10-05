/* let promise = new Promise((resolve) => {
    let request = new XMLHttpRequest();
    request.onload = () => {
        resolve(request.responseText);
    }
    request.open("GET", "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT", true);
    request.send(undefined);
}).then((value) => {
    localStorage.setItem("btc_usdt", value);
}); */

/* localStorage.setItem("binance","data");

localStorage.clear(); //delete all data
console.log(localStorage.key(0)); // btc_usdt
console.log(localStorage.key(1)); // binance

localStorage.removeItem("binance"); //remove element binance

console.log(localStorage); */
