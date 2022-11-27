//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

const { AssertionError } = require("chai");


/**
 * Problem One
 * There is no 'I' in 'team'.
 * Create a function that if there is no 'i' in a word.
 * The function expects a string and will return a boolean.
 * This should be case insensitive both 'i' and 'I' 
 * should return true.
 * 
 * If anything other than a string is passed, throw a TypeError. 
 * The message should match the expected error in the test.
 * Expected 'sentence' to be a string
 * 
 * @param {string} sentence - The string to be searched
 * 
 * @returns {boolean} - Whether or not the string contains an 'i'
 */
 const isThereAnI = (sentence) => {
     if (!(typeof sentence === 'string')) throw new TypeError(`Expected ${sentence} to be a string`);

     return sentence.toLowerCase().includes('i')
}

/**
 * Create a function that uses isThereAnI to 
 * return a cheeky message to the user about whether or not
 * the phrase they entered contains an 'i'.
 * 
 * Use a try...catch block to handle the type error in isThereAnI.
 * 
 * If a Type Error:
 * Should return the error message.
 * 
 * If any other error:
 * The catch block should console.error the error and 
 * return a string that tells the user:
 * 'Something went wrong'
 * 
 * 
 * @param {string} sentence - The string input from the user
 * 
 * @param {string} message = The string to be returned to the user
 */
const motivationalMessageAboutTeamWork = (sentence) => {
    try {
        isThereAnI(sentence)
    } catch (e) {
        if (e instanceof TypeError) {
            return e.message
        }
        console.error(e.message)
        return 'Something went wrong!'
    }
}

/**
 * 
 * Average the values of an grades documents.
 * 
 * Example: problemTwo({CS230: 95, CS250: 89, CS133: 91}) should return 91.7
 * 
 * Function should throw a RangeError is a value is not between 0 and 100.
 * Message should state Expected 'key': 'value" to be between 0 and 100
 * 
 * Function should throw a TypeError if a value is not a number.
 * Message should state Expected 'key': 'value' to be a number
 * 
 * 
 * 
 */
const averageGrades = (obj) => {
    let grades = [];

    Object.entries(obj).forEach(([key, value] )=> {
        if (obj[key] < 0 || obj[key] > 100) throw new RangeError(`Expected ${key}: ${value} to be between 0 and 100`)
        if (typeof obj[key] !== 'number') throw new TypeError(`Expected ${key}: ${value} to be a number`)
        grades.push(obj[key])
        }
    )

    let average = grades.reduce((a,b) => a + b) / grades.length;
    return parseFloat(average.toFixed(1))
}

/**
 * Create a function that takes a databaseLookup function and returns a 'report card'.
 * The databaseLookup will return a grade object similar to what is needed in averageGrades.
 * For now the only thing you have to return is an average of the grades.
 * 
 * The function should have a try...catch block that handles the errors thrown by averageGrades.
 * It should return a string that tells the user what went wrong.
 * All other errors should be handled by a generic error handler.
 */
const gradeReport = (dataLookup) => {
    try {
        return averageGrades(dataLookup());
    } catch (e) {
        if (e instanceof TypeError) {
            return e.message
        } else if (e instanceof RangeError) {
            return e.message
        } else {
            console.error(e)
            return 'Something went wrong!'
        }
    }

}


module.exports = { isThereAnI, motivationalMessageAboutTeamWork, averageGrades, gradeReport};