class Item {
    constructor() {
        if (this.constructor === Item) {
            // Error: Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        // Check if all instance methods are implemented.
        if (this.IPRINT === Item.prototype.IPRINT) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method IPRINT.");
        }
        if (this.ENERGY === Item.prototype.ENERGY) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method ENERGY.");
        }
        if (this.CODE === Item.prototype.CODE) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method CODE.");
        }
    }

    IPRINT() {
    }

    ENERGY() {
    }

    // eslint-disable-next-line no-unused-vars
    CODE(f) {
    } //f : ForgedItem
}

export {Item};
