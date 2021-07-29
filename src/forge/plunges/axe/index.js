import {Plunge} from "@/forge/plunges";

class Dragonslayer extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Dragonslayer"
            case 'jp':
                return "ドラゴンスレイヤー"
            default:
                return "Dragonslayer"
        }
    }

    value() {
        return 3
    }
}

class Woodchopper extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Woodchopper"
            case 'jp':
                return "マキ割り"
            default:
                return "Woodchopper"
        }
    }

    value() {
        return 14
    }
}

export {Dragonslayer, Woodchopper}
