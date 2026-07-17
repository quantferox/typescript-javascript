//Iterating Over a String

/* for (let letter of "Stimul") {
    if (letter === letter.toLowerCase()) {
        console.log(letter.toUpperCase());
    }
    else{
        console.log(letter);
    }
} */

//Iterating Over an Array

/* for(let num of [2,4,8,16,32,64,128]){
    if(num === 32){
        console.log(num);
    }
} */

//Home Made Iterable

/* 
function genNumber(startValue, step) {
    let sValue = startValue;
    return {
        next: function () {
            if (sValue < 128) {
                sValue *= step;
                return {
                    value: sValue,
                    done: false
                };
            }
            else {
                return {
                    value: sValue,
                    done: true
                };
            }
        },
        [Symbol.iterator]: function () {
            return this;
        }
    };
}

const genNumberVar = genNumber(1, 2); */

/* for (let i = 0; i <= 10; i++) {
    console.log(genNumberVar.next());
} */

/* for (const iterator of genNumberVar) {
    console.log(iterator);
} */