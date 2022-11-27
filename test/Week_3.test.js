var expect = require("chai").expect;

const { problemOne, problemTwo, problemThree, problemFour} = require('../src/Week_3.js');

describe('Week 3, ProblemOne', () => {
    it(`should return 91.7 when given CS230: 95,CS250: 89,CS133: 91}`, () => {
        expect(problemOne({CS230: 95, CS250: 89, CS133: 91})).to.eql(91.7);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: ''}`, () => {
        expect(problemOne({CS230: 95, CS250: 89, CS133: ''})).to.eql(92);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: -1}`, () => {
        expect(problemOne({CS230: 95, CS250: 89, CS133: -1})).to.eql(92);
    });
    it(`should return 85 when given {'CalcI': 95, 'CalcII': 89, 'CalcIII': 71}`, () => {
        expect(problemOne({'CalcI': 95, 'CalcII': 89, 'CalcIII': 71})).to.eql(85);
    });
    it(`should return undefined when given {CS230: '', CS250: '', CS133: ''}`, () => {
        expect(problemOne({CS230: '', CS250: '', CS133: ''})).to.eql(undefined);
    });
    it(`should return undefined when given {}`, () => {
        expect(problemOne({})).to.eql(undefined);
    });
});

describe('Week 3, ProblemTwo', () => {
    it(`should return [['a', 1], ['b', 2], ['c', 3]] when given {a: 1, b: 2, c: 3}`, () => {    
        expect(problemTwo({a: 1, b: 2, c: 3})).to.eql([['a', 1], ['b', 2], ['c', 3]]);
    });

    it(`should return [['a', 1], ['b', 2], ['c', 3]] when given {'a': 1, 'b': 2, 'c': 3}`, () => {
        expect(problemTwo({'a': 1, 'b': 2, 'c': 3})).to.eql([['a', 1], ['b', 2], ['c', 3]]);
    });

    it(`should return [['a', 1], ['b', 2], ['c', ['d', 3]]] when given {a: 1, b: 2, c: {d: 3}}`, () => {
        expect(problemTwo({a: 1, b: 2, c: {d: 3}})).to.eql([['a', 1], ['b', 2], ['c', ['d', 3]]]);
    });

});

describe('Week 3, ProblemThree', () => {
    it(`should return 'straight flush' when given [
        {suit: 'clubs', value: 10}, 
        {suit: 'clubs', value: 9}, 
        {suit: 'clubs', value: 8}, 
        {suit: 'clubs', value: 7},
        {suit: 'clubs', value: 'J'}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 10}, 
            {suit: 'clubs', value: 9}, 
            {suit: 'clubs', value: 8}, 
            {suit: 'clubs', value: 7}, 
            {suit: 'clubs', value: 'J'}])).to.eql('straight flush');
    });

    it(`should return 'four of a kind' when given [
        {suit: 'clubs', value: 10},
        {suit: 'diamonds', value: 6},
        {suit: 'hearts', value: 10},
        {suit: 'spades', value: 10},
        {suit: 'diamonds', value: 10}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 10},
            {suit: 'diamonds', value: 6},
            {suit: 'hearts', value: 10},
            {suit: 'spades', value: 10},
            {suit: 'diamonds', value: 10}])).to.eql('four of a kind');
    });

    it(`should return 'full house' when given [
        {suit: 'clubs', value: 6},
        {suit: 'diamonds', value: 10},
        {suit: 'hearts', value: 10},
        {suit: 'spades', value: 6},
        {suit: 'clubs', value: 10}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 6},
            {suit: 'diamonds', value: 10},
            {suit: 'hearts', value: 10},
            {suit: 'spades', value: 6},
            {suit: 'clubs', value: 10}])).to.eql('full house');
    });

    it(`should return 'flush' when given [
        {suit: 'clubs', value: 'K'},
        {suit: 'clubs', value: 9},
        {suit: 'clubs', value: 8},
        {suit: 'clubs', value: 4},
        {suit: 'clubs', value: 3}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 'K'},
            {suit: 'clubs', value: 9},
            {suit: 'clubs', value: 8},
            {suit: 'clubs', value: 4},
            {suit: 'clubs', value: 3}])).to.eql('flush');
    });

    it(`should return 'straight' when given [
        {suit: 'clubs', value: 'A'},
        {suit: 'diamonds', value: 2},
        {suit: 'hearts', value: 5},
        {suit: 'spades', value: 3},
        {suit: 'clubs', value: 4}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 'A'},
            {suit: 'diamonds', value: 2},
            {suit: 'hearts', value: 5},
            {suit: 'spades', value: 3},
            {suit: 'clubs', value: 4}])).to.eql('straight');
    });

    it(`should return 'straight' when given [
        {suit: 'clubs', value: 'A'},
        {suit: 'diamonds', value: 10},
        {suit: 'hearts', value: 'K'},
        {suit: 'spades', value: 'Q'},
        {suit: 'clubs', value: 'J'}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 'A'},
            {suit: 'diamonds', value: 10},
            {suit: 'hearts', value: 'K'},
            {suit: 'spades', value: 'Q'},
            {suit: 'clubs', value: 'J'}])).to.eql('straight');
    });

    it(`should return 'three of a kind' when given [
        {suit: 'clubs', value: 10},
        {suit: 'diamonds', value: 6},
        {suit: 'hearts', value: 10},
        {suit: 'spades', value: 10},
        {suit: 'diamonds', value: 2}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 10},
            {suit: 'diamonds', value: 6},
            {suit: 'hearts', value: 10},
            {suit: 'spades', value: 10},
            {suit: 'diamonds', value: 2}])).to.eql('three of a kind');
    });

    it(`should return 'two pair' when given [
        {suit: 'clubs', value: 10},
        {suit: 'diamonds', value: 6},
        {suit: 'hearts', value: 10},
        {suit: 'spades', value: 6},
        {suit: 'diamonds', value: 2}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 10},
            {suit: 'diamonds', value: 6},
            {suit: 'hearts', value: 10},
            {suit: 'spades', value: 6},
            {suit: 'diamonds', value: 2}])).to.eql('two pair');
    });

    it(`should return 'one pair' when given [
        {suit: 'clubs', value: 10},
        {suit: 'diamonds', value: 6},
        {suit: 'hearts', value: 10},
        {suit: 'spades', value: 4},
        {suit: 'diamonds', value: 2}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 10},
            {suit: 'diamonds', value: 6},
            {suit: 'hearts', value: 10},
            {suit: 'spades', value: 4},
            {suit: 'diamonds', value: 2}])).to.eql('one pair');
    });

    it(`should return 'high card' when given [
        {suit: 'clubs', value: 10},
        {suit: 'diamonds', value: 6},
        {suit: 'hearts', value: 5},
        {suit: 'spades', value: 4},
        {suit: 'diamonds', value: 2}]`, () => {
        expect(problemThree([
            {suit: 'clubs', value: 10},
            {suit: 'diamonds', value: 6},
            {suit: 'hearts', value: 5},
            {suit: 'spades', value: 4},
            {suit: 'diamonds', value: 2}])).to.eql('high card');
    });
});

describe('Week 3, ProblemFour', () => {
    it('should return true when given {} and {}', () => {
        expect(problemFour({}, {})).to.eql(true);
    });

    it('should return true when given {a: 1} and {a: 1}', () => {
        expect(problemFour({a: 1}, {a: 1})).to.eql(true);
    });

    it('should return true when given {a: 1, b: 2} and {a: 1, b: 2}', () => {
        expect(problemFour({a: 1, b: 2}, {a: 1, b: 2})).to.eql(true);
    });

    it(`should return true when given {a: 1, b: 2, c: 3} and {'a': 1, 'b': 2, 'c': 3}`, () => {
        expect(problemFour({a: 1, b: 2, c: 3}, {'a': 1, 'b': 2, 'c': 3})).to.eql(true);
    });

    it(`should return false when given {a: 1, b: 2, c: 3} and {a: 1, b: 2}`, () => {
        expect(problemFour({a: 1, b: 2, c: 3}, {a: 1, b: 2})).to.eql(false);
    });

    it(`should return true when given {a: 1, b: {c: 3, d: 4}} and {a: 1, b: {c: 3, d: 4}}`, () => {
        expect(problemFour({a: 1, b: {c: 3, d: 4}}, {a: 1, b: {c: 3, d: 4}})).to.eql(true);
    });

    it(`should return false when given {a: 1, b: {c: 3, d: 4}} and {a: 1, b: {c: 3, d: 5}}`, () => {
        expect(problemFour({a: 1, b: {c: 3, d: 4}}, {a: 1, b: {c: 3, d: 5}})).to.eql(false);
    });

    it(`should return true when given {a: 1, b: {c: 3, d: {e: 5}}}} and {a: 1, b: {c: 3, d: {e: 5}}}}`, () => {
        expect(problemFour({a: 1, b: {c: 3, d: {e: 5}}}, {a: 1, b: {c: 3, d: {e: 5}}})).to.eql(true);
    });
});