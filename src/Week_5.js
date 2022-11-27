//Midterm Questions
//To be sent to you all one day before your exam.
//One of Five will be selected at random for you to solve.


/**
 * Create a function that counts how many of each letter there are in a string. 
 * This function must count both cases of the letter as the same.
 * This should return an object.
 * This should return undefined if not string or if empty string.
 * 
 * Example: problemOne("Hello World") should return {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 * 
 * @param {string} str - The string to be searched
 * 
 * @returns {number} - An object of all letter counts.
 */
 const problemOne = (str) => {
     if (str === '' || typeof str !== 'string') return undefined
     let letters = {}
     for (const char of str.toLowerCase()) {
      char in letters
          ? letters[char]++
          : letters[char] = 1
     }
     delete letters[' ']
     return letters
}

/**
 * Create a function that finds all the uncommon elements between two arrays.
 * 
 * Example: problemThree([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]) should return [1,3,5,6,8,10]
 * 
 * @param {number[]} arr1 - The first array to be compared
 * 
 * @param {number[]} arr2 - The second array to be compared
 * 
 * @returns {number[]} - The array of common elements
 *
 */
const problemTwo = (arr1, arr2) => {
    return arr1.length === 0 || arr2.length === 0
        ? undefined
        : [
        ...arr1.filter((el) => arr2.indexOf(el) === -1 ),
        ...arr2.filter((el) => arr1.indexOf(el) === -1 )
        ]
}

/**
 * Find the second smallest and biggest numbers in an array
 * 
 * Example: problemOne([1, 2, 3, 4, 5]) should return [2, 4]
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the second smallest and biggest numbers in the array
 */
const problemThree = (arr) => {
    if (arr.length < 2) return undefined
    const sort = arr.sort((a,b) => a - b)
    return arr.length > 2
        ? [
        sort[1],
        sort[sort.length-2]
        ]
        : [sort[0], sort[1]]
}


/**
 * Average the values of an grades documents. Return value with only 1 decimal place.
 * 
 * Example: problemOne({CS230: 95, CS250: 89, CS133: 91}) should return 91.7
 * 
 * Values can be numbers or strings. If a value is a string, ignore it.
 * 
 * Numbers will be between 0 and 100. Handle situations where the number is not in this range.
 * 
 * @param {object} obj - The object of class grades.
 * 
 * @returns {number}
 */
const problemFour = (obj) => {
    let grades = [];

    Object.keys(obj).forEach(key =>
        obj[key] > 0 && obj[key] < 100 && typeof obj[key] === 'number'
            ? grades.push(obj[key])
            : null)

    if (grades.length === 0) return undefined

    let average = grades.reduce((a,b) => a + b) / grades.length;
    return parseFloat(average.toFixed(1))
}

/**
 * Create a function that takes an array of numbers and return the three highest negative numbers in order.
 * 
 * Example: problemThree([-1, 2, 3, 5, 4, -4, -2, -1]) should return [-2, -1, -1]
 * 
 * @param {number[]} arr - The array to search
 * 
 * @returns {number[]} - An array containing the three lowest positive numbers in the array
 * 
 * You must use Array operators like .forEach, .map, .filter, .reduce, etc.
 */
const problemFive = (arr) => {
    return arr.filter((value, i, arr) => value < 0)
        .sort((a, b) => a - b)
        .slice(-3)
}

module.exports = { problemOne, problemTwo, problemThree, problemFour, problemFive };