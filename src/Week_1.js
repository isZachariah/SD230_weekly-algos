
/**
 * Create a function that counts how many r's are in a string. 
 * This function must count both cases of the letter r.
 * 
 * Example: problemOne("Hello World") should return 1
 * 
 * @param {string} sentence - The string to be searched
 * 
 * @returns {number} - The number of r's in the string
 */
 function problemOne(sentence){
     try {
         return countChar(sentence, 'r')
     } catch (e) {
         if (e instanceof TypeError) {
             console.error(e.message)
             return e.message
         }
     }
}

/**
 * Below is a more generalized version of problemOne.
 * @param {string} sentence - the string to be searched
 * @param {string} letter - the letter to look for
 * 
 * @return {number} - the number of times letter occurred in sentence
 */
 function countChar(sentence, letter) {
    if (typeof sentence !== 'string' || typeof letter !== 'string') {
        throw new TypeError(`countChar: parameter sentence: '${sentence}' is not type 'string'`);
    }
    let letterCount = 0;
    for (let character of sentence) {
        if (character.localeCompare(letter, 'en', { sensitivity: 'base' } ) === 0) {
            letterCount += 1;
        }
    }
    return letterCount;
}

/**
 * Create a function that takes a number and returns a string formatted with commas separating thousands.
 * Example: problemTwo(1000000) should return "1,000,000"
 * 
 * @param {number} number - The number to be formatted
 * 
 * @returns {string} - The number formatted with commas
 */

function problemTwo(number){
    if (typeof number !== 'number') {
        throw new TypeError(`problemTwo: typeof parameter: '${number}' is '${typeof number}' but expected 'number'`)
    }
    return Number(number).toLocaleString('en-US');
}

/**
 * Create a function that takes two strings as inputs and returns the longest common ending.
 * This should be case-insensitive.
 * 
 * Example: problemThree("Hello World", "Goodbye World") should return " World"
 * 
 * @param {string} str1 - The first string to be compared
 * @param {string} str2 - The second string to be compared
 * 
 * @returns {string} - The longest common ending of the two strings
 */
function problemThree(str1, str2) {
    if (typeof str1 === 'string' && typeof str2 === 'string') {
        for (let c in str2) {
            const substr2 = str2.substring(c, str2.length);
            if (str1.toLowerCase().endsWith(substr2.toLowerCase())) {
                return substr2;
            }
        }
        return '';
    }
    throw new TypeError(`problemThree: typeof str1: '${str1}' is '${typeof str1}', typeof str2: '${str2}' is '${typeof str2}' - expected both to be strings`)
}

/**
 * Create a function that takes a two digit number and determines if its the largest of two possible digit swaps.
 * 
 * Example: problemFour(27) should return false
 * Example: problemFour(43) should return true
 * 
 * @param {number} num - The number to be checked
 * 
 * @returns {boolean} - True if the number is the largest of two possible digit swaps, false otherwise
 */

function problemFour(num){
    if (typeof num === 'number') {
        if (num > 9 && num < 100) {
            let flipped = flip(num);
            return num >= flipped;
        }
        throw new RangeError(`problemFour: Expected parameter ${num} to be a two digit number, between 10 and 99.`)
    }
    throw new TypeError(`problemFour: Expected typeof '${num}' to be 'number' but received ${typeof num}`)
}

const flip = (num) => {
    let parsed = num.toString();
    let flipped = `${parsed[1]}${parsed[0]}`;
    return Number(flipped);
}

/**
 * You are at the given coordinate of a grid.
 * Given your coordinates and a cartesian coordinate of your destination,
 * return how many moves it will take to arrive, if you can only move 1 integer in any direction at a time.
 * All coordinates will be integers
 * 
 * Example: problemFive([0,0], [1,1]) should return 2
 * 
 * @param {number[]} start - The starting coordinate
 * @param {number[]} end - The ending coordinate
 * 
 * @returns {number} - The number of moves it will take to arrive at the destination
 * 
 */
function problemFive(start, end){
    try {
        if (isCoordinates(start, 'start') && isCoordinates(end, 'end')) {
            let x = Math.abs(end[0]);
            let y = Math.abs(end[1]);

            return x + y;
        }
    } catch (err) {
        console.error(err.message)
        return err.message
    }

}

class IndexError extends Error {
    constructor(message) {
        super(message);
        this.name = "IndexError";
    }
}

/** isCoordinates
 * @param {number[]} param - parameter to test
 * @param {string} nameOfParameter - name of original parameter
 * */
function isCoordinates(param, nameOfParameter) {
    if (!Array.isArray(param)) {
        throw new TypeError(`isCoordinates: Expected ${nameOfParameter} to be an Array but got ${typeof param} `)
    }
    if (param.length !== 2) {
        throw new IndexError(`isCoordinates: ${nameOfParameter} - Expected 2 indices but got ${param.length}`)
    }
    param.forEach((num, index,) => {
        if (typeof num !== 'number') {
            throw new TypeError(`isCoordinates: ${nameOfParameter} - Expected index: ${index} typeof ${typeof num} to be a 'number'`)
        }
    });
    return true
}




module.exports = { problemOne, problemTwo, problemThree, problemFour, problemFive };