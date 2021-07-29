import {ESSENCE} from "@/forge/enums";
import {Jinn} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Jinn_Silver extends Item {
    constructor() {
        super()
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Jinn Silver"
            case 'jp':
                return "[Jinn Silver]"
            default:
                return "Jinn Silver"
        }
    }

    energy() {
        return 48
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

export {Jinn_Silver};
