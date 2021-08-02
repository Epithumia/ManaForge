import {Item} from "@/forge/items/Item";
import {Ocean_God} from "@/forge/cards/heaven_gods";
import {ESSENCE} from "@/forge/enums";

class Squalphin extends Item {
    constructor() {
        super();
    }

    value = 38

    text(language) {
        switch(language) {
            case 'classic':
                return "Squalphin"
            case 'jp':
                return "イルカキューリ"
            default:
                return "Squalphin"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.getUn() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Ocean_God();
        }
        f.taint(ESSENCE.UNDINE);
    }

    source() {
        return ["Orchard"]
    }

}

export {Squalphin};
