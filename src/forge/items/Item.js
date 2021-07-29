class Item {
    constructor() {
        if (this.constructor === Item) {
            // Error: Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        // Check if all instance methods are implemented.
        if (this.text === Item.prototype.text) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method text(language).");
        }
        if (this.energy === Item.prototype.energy) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method ENERGY.");
        }
        if (this.code === Item.prototype.code) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method CODE.");
        }
        if (this.source === Item.prototype.source) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method CODE.");
        }
    }

    /**
     * @param language: String
     * @return String
     * @constructor
     */
    text(language) {
        switch(language) {
            case 'classic':
                return ""
            case 'jp':
                return ""
            default:
                return ""
        }
    }

    /**
     * @return Number
     * @constructor
     */
    energy() {
        return null
    }

    /**
     * @param f: ForgedItem
     * @constructor
     */
    // eslint-disable-next-line no-unused-vars
    code(f) {
    }

    /**
     * @return {*[]}
     * @constructor
     */
    source() {
        return null
    }
}

export {Item};
