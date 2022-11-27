var expect = require("chai").expect;

const { problemOne, problemTwo, problemThree, problemFour, problemFive} = require('../src/Week_5.js');

describe('Week 5, ProblemOne', () => {
    it("should return undefined when given an empty string", () => {
        expect(problemOne("")).to.equal(undefined);
    });
    it("should return undefined when given not a string", () => {
        expect(problemOne(2)).to.equal(undefined);
    });
    it("should return undefined when given not a string", () => {
        expect(problemOne(['two', 'strings'])).to.equal(undefined);
    });
    it('should return {h: 1, e: 1, l: 3, o: 1, a: 1 } when given "Hello All"', () => {
        expect(problemOne("Hello All")).to.equal({h: 1, e: 1, l: 4, o: 1, a: 1 });
    });

    it("should return {s: 2, i: 1, t: 1, e: 1, r: 1} when given a string with an upper and lowercase s", () => {
        expect(problemOne("Sister")).to.equal({s: 2, i: 1, t: 1, e: 1, r: 1});
    });
});

describe('Week 5, problemTwo', () => {
    it('should return [1, 23] when given [1, 4, 6], [4, 6, 23]', () => {
        expect(problemTwo([1, 4, 6], [4, 6, 23])).to.eql([1, 23]);
    });
    it('should return undefined if given [], []', () => {
        expect(problemTwo([], [])).to.eql(undefined);
    });
    it('should return [1,2,3,4,5,6] if given [1, 2, 3], [4, 5, 6]', () => {
        expect(problemTwo([1, 2, 3], [4, 5, 6])).to.eql([1,2,3,4,5,6]);
    });
    it('should return [] if given [1, 2, 3], [1, 2, 3]', () => {
        expect(problemTwo([1, 2, 3], [1, 2, 3])).to.eql([]);
    });
});

describe('Week 5, problemThree', () => {
    it('should return [2, 4] when given [1, 2, 3, 4, 5]', () => {
        expect(problemThree([1, 2, 3, 4, 5])).to.eql([2, 4]);
    });

    it('should return [1, 4] when given [5, 4, 3, -2, 1]', () => {
        expect(problemThree([5, 4, 3, -2, 1])).to.eql([1, 4]);
    });

    it('should return [5, 1] when given [5, 1]', () => {
        expect(problemThree([1, 5])).to.eql([1, 5]);
    });
    it('should return [1, 1] when given [1]', () => {
        expect(problemThree([1])).to.eql([1, 1]);
    });
});

describe('Week 5, problemFour', () => {
    it(`should return 91.7 when given CS230: 95,CS250: 89,CS133: 91}`, () => {
        expect(problemFour({CS230: 95, CS250: 89, CS133: 91})).to.eql(91.7);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: ''}`, () => {
        expect(problemFour({CS230: 95, CS250: 89, CS133: ''})).to.eql(92);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: -1}`, () => {
        expect(problemFour({CS230: 95, CS250: 89, CS133: -1})).to.eql(92);
    });
    it(`should return 85 when given {'CalcI': 95, 'CalcII': 89, 'CalcIII': 71}`, () => {
        expect(problemFour({'CalcI': 95, 'CalcII': 89, 'CalcIII': 71})).to.eql(85);
    });
    it(`should return undefined when given {CS230: '', CS250: '', CS133: ''}`, () => {
        expect(problemFour({CS230: '', CS250: '', CS133: ''})).to.eql(undefined);
    });
    it(`should return undefined when given {}`, () => {
        expect(problemFour({})).to.eql(undefined);
    });
});

describe('Week 5, problemFive', () => {
    it('should return [2, 3, 4] when given [-1, 2, 3, 5, 4]', () => {
        expect(problemFive([-1, -2, 3, 5, 4])).to.eql([-2, -1]);
    });
    it('should return [0.0145, 4.01] when given [ -0.11, -1.3, -4.256, -1.104, -2.102, 0.0145, 4.01]', () => {
        expect(problemFive([-0.11, -1.3, -4.256, -1.104, -2.102, 0.0145, 4.01])).to.eql([-1.3, -1.104, -0.11]);
    });
    it('should return [] when given [0.11, 1.3, 4.256, 1.104, 2.102, 0.0145, 4.01]', () => {
        expect(problemFive([0.11, 1.3, 4.256, 1.104, 2.102, 0.0145, 4.01])).to.eql([]);
    });
});