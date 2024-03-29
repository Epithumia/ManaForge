class Card {
    constructor() {
        if (this.constructor === Card) {
            // Error: Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        // Check if all instance methods are implemented.
        if (this.text === Card.prototype.text) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method text(language).");
        }
        if (this.price === Card.prototype.price) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method price.");
        }
        if (this.FIRST === Card.prototype.FIRST) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method FIRST.");
        }
        if (this.SECOND === Card.prototype.SECOND) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method SECOND.");
        }
        if (this.THIRD === Card.prototype.THIRD) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method THIRD.");
        }
        if (this.HIDDEN === Card.prototype.HIDDEN) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method HIDDEN.");
        }
        if (this.LEAVING === Card.prototype.LEAVING) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method LEAVING.");
        }
        if (this.WORLD === Card.prototype.WORLD) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method WORLD.");
        }
    }

    // eslint-disable-next-line no-unused-vars
    text(language) {
    }

    // eslint-disable-next-line no-unused-vars
    price(price) {
    } //price: int

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    } //f : ForgedItem

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    } //f : ForgedItem
}

export {Card};
