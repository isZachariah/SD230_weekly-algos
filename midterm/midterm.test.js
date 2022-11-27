var expect = require("chai").expect;
const { problemOne, problemTwo, problemThree, problemFour, problemFive } = require('./midterm');

describe('Midterm problemOne', () => {
    it(`should return {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1} when given 'hello world'`, () => {
        expect(problemOne('hello world')).to.eql({h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1});
    });
    it(`should return {f: 1, u: 2, c: 1, k: 1, y: 1, o: 1} when given 'fuck you'`, () => {
        expect(problemOne('fuck you')).to.eql({f: 1, u: 2, c: 1, k: 1, y: 1, o: 1});
    });
    it("should return undefined when given an empty string", () => {
        expect(problemOne("")).to.eql(undefined);
    });
    it("should return undefined when given not a string", () => {
        expect(problemOne(2)).to.eql(undefined);
    });
    it("should return undefined when given not a string", () => {
        expect(problemOne(['two', 'strings'])).to.eql(undefined);
    });
    it('should return {h: 1, e: 1, l: 3, o: 1, a: 1 } when given "Hello All"', () => {
        expect(problemOne("Hello All")).to.eql({h: 1, e: 1, l: 4, o: 1, a: 1 });
    });
    it("should return {s: 2, i: 1, t: 1, e: 1, r: 1} when given a string with an upper and lowercase s", () => {
        expect(problemOne("Sister")).to.eql({s: 2, i: 1, t: 1, e: 1, r: 1});
    });
})

describe('Midterm problemTwo', () => {
    it(`problemThree([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]) should return [1,3,5,6,8,10]`, () => {
        expect(problemTwo([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])).to.eql([1,3,5,6,8,10]);
    });
    it(`problemThree([15, 9, 3, 7, 10], [2, 9, 15, 8, 10, 12]) should return [1,3,5,6,8,10]`, () => {
        expect(problemTwo([15, 9, 3, 7, 10], [2, 9, 15, 8, 10, 12])).to.eql([3,7,2,8,12]);
    });
})



describe('Midterm, ProblemFour', () => {
    it(`should return 91.7 when given CS230: 95,CS250: 89,CS133: 91}`, () => {
        expect(problemFour({ CS230: 95, CS250: 89, CS133: 91 })).to.eql(91.7);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: ''}`, () => {
        expect(problemFour({ CS230: 95, CS250: 89, CS133: '' })).to.eql(92);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: -1}`, () => {
        expect(problemFour({ CS230: 95, CS250: 89, CS133: -1 })).to.eql(92);
    });
    it(`should return 85 when given {'CalcI': 95, 'CalcII': 89, 'CalcIII': 71}`, () => {
        expect(problemFour({ 'CalcI': 95, 'CalcII': 89, 'CalcIII': 71 })).to.eql(85);
    });
    it(`should return undefined when given {CS230: '', CS250: '', CS133: ''}`, () => {
        expect(problemFour({ CS230: '', CS250: '', CS133: '' })).to.eql(undefined);
    });
    it(`should return undefined when given {}`, () => {
        expect(problemFour({})).to.eql(undefined);
    });
});



describe('Midterm, ProblemFive', () => {
    it('problemFive([-1, 2, 3, 5, 4, -4, -2, -1]) should return [-2, -1, -1]', () => {
        expect(problemFive([-1, 2, 3, 5, 4, -4, -2, -1])).to.eql([-2, -1, -1]);
    });
})