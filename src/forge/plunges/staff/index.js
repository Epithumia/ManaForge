import {Plunge} from "@/forge/plunges";

class Electrosceptre extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Electrosceptre"
            case 'jp':
                return "雷電の王杓"
            default:
                return "Electroscepter"
        }
    }

    value() {
        return 3
    }
}

class Caduceus extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Caduceus"
            case 'jp':
                return "カドゥケウス"
            default:
                return "Caduceus"
        }
    }

    value() {
        return 3
    }
}

class Golden_Touch extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Golden Touch"
            case 'jp':
                return "化金の一撃"
            default:
                return "Golden Touch"
        }
    }

    value() {
        return 4
    }
}

class Demonicide extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Demonicide"
            case 'jp':
                return "退魔杖"
            default:
                return "Demonicide"
        }
    }

    value() {
        return 2
    }
}

export {Electrosceptre, Caduceus, Golden_Touch, Demonicide}
