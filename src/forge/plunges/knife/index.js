import {Plunge} from "@/forge/plunges";

class Sinister_Blade extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Sinister Blade"
            case 'jp':
                return "凶手の刃"
            default:
                return "Sinister Blade"
        }
    }

    value() {
        return 11
    }
}

class Poison_Blade extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Poison Blade"
            case 'jp':
                return "毒刃"
            default:
                return "Poison Blade"
        }
    }

    value() {
        return 9
    }
}

class Quick_Blade extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Quick Blade"
            case 'jp':
                return "手練れの刃"
            default:
                return "Quick Blade"
        }
    }

    value() {
        return 10
    }
}

export {Sinister_Blade, Poison_Blade, Quick_Blade}
