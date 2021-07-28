class Plunge {
    constructor() {
        if (this.constructor === Plunge) {
            // Error: Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        // Check if all instance methods are implemented.
        if (this.CPRINT === Plunge.prototype.text()) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method get_text().");
        }
        if (this.PRICE === Plunge.prototype.value()) {
            // Error: Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method value.");
        }
    }

    // eslint-disable-next-line no-unused-vars
    text(language) {
    }

    value() {
    }
}

class Thrust extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Thrust"
            case 'jp':
                return "[Thrust]"
            default:
                return "Thrust"
        }
    }

    value() {
        return 1
    }
}

class Double_Shot extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Double Shot"
            case 'jp':
                return "[Double Shot]"
            default:
                return "Double Shot"
        }
    }

    value() {
        return 2
    }
}

class Uppercut extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Uppercut"
            case 'jp':
                return "[Uppercut]"
            default:
                return "Uppercut"
        }
    }

    value() {
        return 1
    }
}

class Shot extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Shot"
            case 'jp':
                return "[Shot]"
            default:
                return "Shot"
        }
    }

    value() {
        return 2
    }
}

class Jump extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Jump"
            case 'jp':
                return "[Jump]"
            default:
                return "Jump"
        }
    }

    value() {
        return 1
    }
}

export {Plunge, Thrust, Double_Shot, Uppercut, Jump, Shot}
