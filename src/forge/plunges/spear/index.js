import {Plunge} from "@/forge/plunges";

class Gungnir extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Gungnir"
            case 'jp':
                return "グングニル"
            default:
                return "Gungnir"
        }
    }

    value() {
        return 6
    }
}

class Trident extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Trident"
            case 'jp':
                return "トライデント"
            default:
                return "Trident"
        }
    }

    value() {
        return 11
    }
}

class Spear_Of_Light extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Spear of Light"
            case 'jp':
                return "光の槍"
            default:
                return "Spear of Light"
        }
    }

    value() {
        return 10
    }
}

export {Gungnir, Trident, Spear_Of_Light}
