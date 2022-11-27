const {IndexError} = require("../helpers/helpers");
/**
 * Find the smallest and biggest numbers in an array
 * 
 * Example: problemOne([1, 2, 3, 4, 5]) should return [1, 5]
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the smallest and biggest numbers in the array
 */


function problemOne(arr) {
    if (Array.isArray(arr)) {
        arr.forEach((num, index) => {
            if (typeof num !== 'number') {
                throw new TypeError(`Expected Index: ${index} to be a number but got ${typeof num}`)
            }
        })
        if (arr.length < 2) throw new IndexError(`Not enough elements in length: ${arr.length} to evaluate`)
        arr.sort((a,b) => a - b );
        return [arr[0], arr[arr.length-1]];
    }
    throw new TypeError(`Expected ${arr} to be an array but got ${typeof arr}`)
}

/**
 * Create a function that takes two numbers and returns the array of
 * multiples of the first number until the array's last value reaches the second number.
 * If the second number is a multiple of the first number, it should be included in the array.
 * 
 * Example: problemTwo(7, 100) should return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]
 * 
 * @param {number} num1 - The number to be multiplied
 * 
 * @param {number} num2 - The number to be reached
 * 
 * @returns {number[]} - The array of multiples
 * 
 */
function problemTwo(num1, num2)
{
    let multiplesArray = [];

    for (let i = num1; i <= num2; i += num1) {
        multiplesArray.push(i);
    }

    return multiplesArray;
}

/**
 * Create a function that finds all common elements between two arrays.
 * 
 * Example: problemThree([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]) should return [2, 4]
 * 
 * @param {number[]} arr1 - The first array to be compared
 * 
 * @param {number[]} arr2 - The second array to be compared
 * 
 * @returns {number[]} - The array of common elements
 *
 */
function problemThree(arr1, arr2)
{
    let commonElements = [];

    arr1.forEach((el1) => arr2.forEach((el2) => {
        if (el1 === el2) commonElements.push(el1);
    }));

    return commonElements;
}


/**
 * Create a function that takes a nested array and counts the total number of items in all the arrays.
 * 
 * Example: problemFour([1, [2, 3], [4, [5, 6]], [7, 8, 9]]) should return 9
 * 
 * @param {number[]} arr - The array to be counted
 * 
 * @returns {number} - The total number of items in the array
 */

function problemFour(arr)
{
    return arr.flat(Infinity).length;

}

module.exports = { problemOne, problemTwo, problemThree, problemFour };