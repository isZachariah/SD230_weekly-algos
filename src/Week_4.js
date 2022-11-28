/**
 * Find the smallest and biggest numbers in an array
 * Example: problemOne([1, 2, 3, 4, 5]) should return [1, 5]
 * 
 * You must use Array operators like .forEach, .map, .filter, .reduce, etc.
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the smallest and biggest numbers in the array
 */

const problemOne = (arr) => {
    if (Array.isArray) {
        arr.forEach((num, index) => {
            if (typeof num !== 'number') {
                throw new TypeError(`Expected Index: ${index} to be a number but got ${typeof num}`)
            }
        })
        return [
            arr.reduce((pre,cur) => cur < pre ? cur : pre),
            arr.reduce((pre,cur) => cur > pre ? cur : pre)
        ]
    }
    throw new TypeError(`problemOne: Expected ${arr} to be number[] but got ${typeof arr}`)
}

/**
* Average the values of an grades documents. Return value with only 1 decimal place.
* Values can be numbers or strings. If a value is a string, ignore it.
* Numbers will be between 0 and 100. Handle situations where the number is not in this range.
* 
* Example: problemTwo({CS230: 95, CS250: 89, CS133: 91}) should return 91.7
* 
* You must use Array operators like .forEach, .map, .filter, .reduce, etc.
* 
* @param {object} obj - The object of class grades.
* 
* @returns {number}
*/


const problemTwo = (obj) => {
    if (typeof obj === 'object') {
        let grades = [];

        Object.keys(obj).forEach(key => obj[key] > 0 ? grades.push(obj[key]) : null)

        if (grades.length === 0) return undefined

        let average = grades.reduce((a,b) => a + b) / grades.length;
        return parseFloat(average.toFixed(1))
    }
    throw new TypeError(`problemTwo: Expected typeof ${obj} to be an object but got ${typeof obj}`)


}

/**
 * Create a function that takes an array of numbers and return the three lowest positive numbers in order.
 * 
 * Example: problemThree([-1, 2, 3, 5, 4]) should return [2, 3, 4]
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the three lowest positive numbers in the array
 * 
 * You must use Array operators like .forEach, .map, .filter, .reduce, etc.
 */
const problemThree = (arr) => {
    if (Array.isArray(arr)) {
        arr.forEach((num, index) => {
            if (typeof num !== 'number') {
                throw new TypeError(`Expected Index: ${index} to be a number but got ${typeof num}`)
            }
        })
        return arr.filter(value => value > 0)
            .sort((a, b) => a - b)
            .slice(0, 3)
    }
    throw new TypeError(`problemThree: Expected ${arr} to be number[] but got ${typeof arr}`)

}

/**
 * Create a function that takes an array of strings and 
 * categorizes them as "short" or "long" based on the length of the string.
 * Strings with 10 or more characters are considered long.
 * 
 * You must use Array operators like .forEach, .map, .filter, .reduce, etc.
 * 
 * @param {string[]} arr - The array of strings to categorize
 * 
 * @returns {object} - An object with two properties, short and long, that contain arrays of strings
 */

const problemFour = (arr) => {
    if (Array.isArray(arr)) {
        if (!arr.every((str, index) => typeof str === 'string')) {
            throw new TypeError(`Expected every element of ${arr} to be a string`)
        }

        let strings = { short: [], long: [], }

        arr.forEach(string => string.length < 10 ? strings.short.push(string) : strings.long.push(string))

        return strings

    }
    throw new TypeError(`problemFour: Expected ${arr} to be string[] but got ${typeof arr}`)

}

module.exports = { problemOne, problemTwo, problemThree, problemFour };