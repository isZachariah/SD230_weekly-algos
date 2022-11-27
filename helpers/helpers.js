/** testArgumentTypes
 * --wont work for arrays rn
 *
 * @param {IArguments} args
 * @param {string[]} types
 * **/
function testArgumentTypes(args, types) {
    types.forEach((type, index) => {
        if (typeof args[index] !== type) {
            throw new TypeError(`Expected arg ${args[index]} to be typeof ${type} but got ${typeof args[index]}`)
        }
    })
}

class IndexError extends Error {
    constructor(message) {
        super(message);
        this.name = "IndexError";
    }
}

module.exports = {IndexError}