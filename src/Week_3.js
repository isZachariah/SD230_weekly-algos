
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


 function problemOne(obj)
 {
     let grades = [];

     for (let key of Object.keys(obj)) {
         if (obj[key] >= 1 && obj[key] <= 100) {
             grades.push(obj[key]);
         }
     }
     if (grades.length === 0) return undefined

     let average = grades.reduce((a,b) => a + b) / grades.length;
     return parseFloat(average.toFixed(1));


 }

  /**
  * Convert an object to an array, where the keys are the first element in each subarray, and the values are the second element.
  * 
  * Example (input): {a: 1, b: 2, c: 3}
  * 
  * Example (output): [['a', 1], ['b', 2], ['c', 3]]
  * 
  * @param {object} obj
  * 
  * @returns {array}
  */
   function problemTwo(obj)
   {
       return Object.entries(obj);
   }
 
 /**
  * You are given a hand of five playing cards.
  * Each card is represented as an object with a suit and a value.
  * 
  * Example: [
  * {suit: 'clubs', value: 10},
  * {suit: 'hearts', value: 10},
  * {suit: 'spades', value: 1},
  * {suit: 'hearts', value: 'J'},
  * {suit: 'spades', value: 'A'}]
  * 
  * Write a function that return whether you have a 
  * straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, or high card.
  * 
  * A straight flush is a hand that contains five cards of sequential value, all of the same suit.
  * A four of a kind is a hand that contains four cards of the same value.
  * A full house is a hand that contains three cards of one value, and two cards of another value.
  * A flush is a hand that contains five cards of the same suit.
  * A straight is a hand that contains five cards of sequential value.
  * A three of a kind is a hand that contains three cards of the same value.
  * A two pair is a hand that contains two cards of one value, and two cards of another value.
  * # A one pair is a hand that contains two cards of the same value.
  * A high card is any hand that does not fit any of the above categories.
  * 
  * Think about how you would structure this logic to be easy to read and understand 
  * especially when it comes to the definitions of these hands.
  */
 function problemThree(hand)
 {
     const SUITS = ['clubs', 'hearts', 'spades' ,'diamonds'];
     const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

     let values = [];
     let suits = [];

     hand.forEach(card => {
         values.push(card.value);
         suits.push(card.suit);
     });

     values = values.map(value => VALUES.indexOf(value));
     suits = suits.map(suit => SUITS.indexOf(suit));

     let flush = hand.every(card => card.suit === hand[0].suit);
     let groups = VALUES.map( (value, i) => values.filter( j => i === j ).length ).sort( (x, y) => x - y ).reverse();
     let shifted = values.map(x => (x + 1) % 13);
     let distance = Math.min( Math.max(...values) - Math.min(...values), Math.max(...shifted) - Math.min(...shifted));
     let straight = groups[0] === 1 && distance < 5;

     if (straight && flush) return 'straight flush';
     else if (groups[0] === 4) return 'four of a kind';
     else if (groups[0] === 3 && groups[1] === 2) return 'full house';
     else if (flush) return 'flush';
     else if (straight) return 'straight';
     else if (groups[0] === 3) return 'three of a kind';
     else if (groups[0] === 2 && groups[1] === 2) return 'two pair';
     else if (groups[0] === 2) return 'one pair';
     else return 'high card'

 }

// https://rosettacode.org/wiki/Poker_hand_analyser#JavaScript
 
 /**
  * Check if two objects are equal in keys and values. 
  * This has to handle deeply nested objects.
  * 
  * Example problemFour({a: 1, b: 2}, {a: 1, b: 2}) should return true
  * 
  * @param {object} objOne
  * 
  * @param {object} objTwo
  * 
  * @returns {boolean}
  * 
  */
  function problemFour(objOne, objTwo)
  {
      return JSON.stringify(objOne) === JSON.stringify(objTwo);
  }

module.exports = { problemOne, problemTwo, problemThree, problemFour };