import {ESSENCE} from "@/forge/enums";
import {Jinn} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Jinn_Gold extends Item {
    constructor() {
        super()
    }

    value = 7

    text(language) {
        switch(language) {
            case 'classic':
                return "Jinn Gold"
            case 'jp':
                return "ジンの金貨"
            default:
                return "Jinn Gold"
        }
    }

    energy() {
        return 64
    }

    code(f) {
        f.taint(ESSENCE.JINN);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Jinn();
        }
    }

    source() {
        return ["Collected"];
    }

}

export {Jinn_Gold};
