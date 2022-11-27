import {expect} from "chai";
import {Week2problemOne, Week2problemThree, Week2problemTwo} from "../src/Week_8";

describe('Week 2, ProblemOne', () => {
    it('should return [1, 5] when given [1, 2, 3, 4, 5]', () => {
        expect(Week2problemOne({})).to.throw(TypeError, `TypeError: Expected ${typeof arr} to be a Number Array`);
    });

    it('should return [-2, 5] when given [5, 4, 3, -2, 1]', () => {
        expect(Week2problemOne([5, 4, 3, -2, 1])).to.eql([-2, 5]);
    });

    it('should return [1, 5] when given [5, 1]', () => {
        expect(Week2problemOne([1, 5])).to.eql([1, 5]);
    });
    it('should return [1, 1] when given [1]', () => {
        expect(Week2problemOne([1])).to.eql([1, 1]);
    });
});

describe('Week 2, ProblemTwo', () => {
    it('should return [3, 6, 9, 12, 15] when given 3, 17', () => {
        expect(Week2problemTwo(3, 17)).to.eql([3, 6, 9, 12, 15]);
    });

    it('should return [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] when given 5, 50', () => {
        expect(Week2problemTwo(5, 50)).to.eql([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });
});

describe('Week 2, ProblemThree', () => {
    it('should return [8, 23] when given [1, 4, 6, 8, 15, 23, 45], [5, 8, 17, 23, 48]', () => {
        expect(Week2problemThree([1, 4, 6, 8, 15, 23, 45], [5, 8, 17, 23, 48])).to.eql([8, 23]);
    });
    it('should return [] if given [], []', () => {
        expect(Week2problemThree([], [])).to.eql([]);
    });
    it('should return [] if given [1, 2, 3], [4, 5, 6]', () => {
        expect(Week2problemThree([1, 2, 3], [4, 5, 6])).to.eql([]);
    });
    it('should return [1, 2, 3] if given [1, 2, 3], [1, 2, 3]', () => {
        expect(Week2problemThree([1, 2, 3], [1, 2, 3])).to.eql([1, 2, 3]);
    });
});