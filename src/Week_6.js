/**
 * Remember in Javascript classes are just functions. 
 * 
 * These might be useful:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#no_separate_this
 * https://www.patterns.dev/posts/factory-pattern/
 * https://www.patterns.dev/posts/prototype-pattern/
 * https://www.javascripttutorial.net/es6/object-literal-extensions/
 * 
 */

/*
 * From Chapter 6 of Eloquent JavaScript:
 *
 * Write a class  using a class declaration that represents a vector in two-dimensional space.
 * It takes x and y parameters (numbers), which it should save to properties of the same name.
 * 
 * Give the Vec prototype two methods, add and subtract, that take another vector as a parameter and
 * return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
 * 
 * Add a getter property length to the prototype that computes the length of the vector—that is, 
 * the distance of the point (x, y) from the origin (0, 0).
 * 
 */
class Vector {
    /** Vector constructor
     * @param {number} x
     * @param {number} y
     * **/
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y)
    }

    subtract(other) {
        return new Vector(this.x - other.x, this.y - other.y)
    }

}

/*
 * Rewrite the same Vec class as Vec 2 using an instantiable function 
*/

function Vector2(x, y) {
    this.x = x;
    this.y = y;

    this.length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))

    this.add = (other) => new Vector2(this.x + other.x, this.y + other.y)

    this.subtract = (other) => new Vector2(this.x - other.x, this.y - other.y)
}

/*
 * Rewrite the same Vec class using a factory function
 *
 * This may be helpful to you when you are trying to work through some of these problems.

*/ 

const createVector = (x, y) => ({
    x,
    y,
    length: Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)),
    add(other) {
        return createVector(this.x + other.x, this.y + other.y)
    },
    subtract(other) {
        return createVector(this.x - other.x, this.y - other.y)
    },
})

/*
 * Create a new class called "Moving Vector" that inherits from the Vec class. 
 * Moving Vectors also have a direction property that is a number between 0 and 360.
 * Moving Vectors also have a speed property that is a number between 0 and 100. It means the number of
 * length the vector moves in one second.
 * 
 * Moving Vectors have a method called move that takes a number of seconds as a parameter.
 * The move method should update the x and y properties of the vector based on the direction and speed.
 * 
*/

class MovingVector extends Vector {
    constructor(x, y, direction, speed) {
        super(x, y);
        if (direction > 0 && direction < 360) this.direction = direction
        if (speed > 0 && speed < 100) this.speed = speed
    }

    move (seconds) {
        const lengthMoved = this.speed * seconds;
        const radians = this.direction * (Math.PI / 180);
        this.x += lengthMoved * Math.cos(radians);
        this.y += lengthMoved * Math.sin(radians);
        return this;
    }

}


module.exports = { Vector, Vector2, createVector, MovingVector};