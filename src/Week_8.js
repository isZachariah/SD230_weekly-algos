/**
 * Choose any 5 functions from previous weeks and add at least three new unit tests to each function.
 * One should be an error test and the other two should be edge cases.
 * 
 * You will need to submit both the Week_8.js file and the Week_8.test.js file.
 */

/**
 * Find the smallest and biggest numbers in an array
 *
 * Example: problemOne([1, 2, 3, 4, 5]) should return [1, 5]
 *
 * @param {number[]} arr - The array to search
 *
 * @returns {number[]} - An array containing the smallest and biggest numbers in the array
 */


function Week2problemOne(arr)
{
    if (!Array.isArray) throw new TypeError(`TypeError: Expected ${typeof arr} to be a Number Array`)
    arr.sort((a,b) => a - b );
    return [arr[0], arr[arr.length-1]];
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
function Week2problemTwo(num1, num2)
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
function Week2problemThree(arr1, arr2)
{
    let commonElements = [];

    arr1.forEach((el1) => arr2.forEach((el2) => {
        if (el1 === el2) commonElements.push(el1);
    }));

    return commonElements;
}


export { Week2problemOne, Week2problemTwo, Week2problemThree }