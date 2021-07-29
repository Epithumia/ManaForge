import {ESSENCE} from "@/forge/enums";
import {Jinn} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Jinn_Gold extends Item {
    constructor() {
        super()
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Jinn Gold"
            case 'jp':
                return "[Jinn Gold]"
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
