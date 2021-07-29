import {Plunge} from "@/forge/plunges";

class Ragnarok extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Ragnarok"
            case 'jp':
                return "ラグナロク"
            default:
                return "Ragnarok"
        }
    }

    value() {
        return 9
    }
}

class Chaotic_Avenger extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Chaotic Avenger"
            case 'jp':
                return "カオスリベンジャー"
            default:
                return "Chaotic Avenger"
        }
    }

    value() {
        return 4
    }
}

export {Ragnarok, Chaotic_Avenger}
