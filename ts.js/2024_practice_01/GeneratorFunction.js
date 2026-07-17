/* const generateNumber = () => {
    let num = 0;
    return {
        next: () => {
            num++;
            return {
                value: num,
                done: false
            }
        },
        [Symbol.iterator]: () => {
            return this;
        }
    }
}

const obj = generateNumber();

console.log(obj.next()); // 1
console.log(obj.next()); // 2
console.log(obj.next()); // 3 */

//========================================

/* function* generateNumber(){
    let x = 0;
    while(true){
        yield ++x;
    }
}

const obj = generateNumber();

console.log(obj.next()); // 1
console.log(obj.next()); // 2
console.log(obj.next()); // 3 */