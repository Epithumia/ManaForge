import {Plunge} from "@/forge/plunges";

class Magma_Hammer extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Magma Hammer"
            case 'jp':
                return "マグマのハンマー"
            default:
                return "Magma Hammer"
        }
    }

    value() {
        return 5
    }
}

class Mjolnir extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Mjolnir"
            case 'jp':
                return "ミルニョル"
            default:
                return "Mjolnir"
        }
    }

    value() {
        return 6
    }
}

class Sledgehammer extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Sledgehammer"
            case 'jp':
                return "破城撃"
            default:
                return "Sledgehammer"
        }
    }

    value() {
        return 12
    }
}

class Quake_Hammer extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Quake Hammer"
            case 'jp':
                return "大地のハンマー"
            default:
                return "Quake Hammer"
        }
    }

    value() {
        return 8
    }
}

export {Magma_Hammer, Mjolnir, Sledgehammer, Quake_Hammer}
