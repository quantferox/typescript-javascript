/**
 * @param {String} str 
 */
const getStringLength = (str) => {
    if (typeof str !== "string") {
        throw new SyntaxError("Input must be a string!");
    }
    else {
        return str.length;
    }
}

const generateRandomInput = () => {
    const types = ["string", "number", "boolen", "object", "undefined", "function"];
    const rndType = types[Math.floor(Math.random() * types.length)];
    switch (rndType) {
        case "string":
            return Math.random().toString(36).substring(4);
        case "number":
            return Math.random() * 100;
        case "boolen":
            return Math.random() < 0.5;
        case "object":
            return { key: Math.random().toString(36).substring(4) };
        case "undefined":
            return undefined;
        case "function":
            return () => { return "I am a arrow function" }
    }
}

const fuzzTest = (callback, iterations) => {
    let passed = 0;
    let failed = 0;

    for (let x = 0; x < iterations; x++) {
        let input;
        try {
            input = generateRandomInput();
            const result = callback(input);
            console.log(`\x1B[42mPASS \x1B[0m - Input: \x1B[33m ${input} \x1B[0m, Result: \x1B[33m${result}\x1B[0m`);
            passed++;
        }
        catch (e) {
            console.error(`\x1B[41mERROR\x1B[0m - Input: \x1B[33m${input}\x1B[0m, Message: \x1B[33m${e.message}\x1B[0m`);
            failed++;
        }
    }
}

fuzzTest(getStringLength, 5);