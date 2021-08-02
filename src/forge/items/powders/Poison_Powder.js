import {Item} from "@/forge/items/Item";
import {Pixie_Of_Rage} from "@/forge/cards/pixies";

class Poison_Powder extends Item {
    constructor() {
        super();
    }

    value = 108

    text(language) {
        switch(language) {
            case 'classic':
                return "Poison Powder"
            case 'jp':
                return "毒の粉"
            default:
                return "Poison Powder"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Rage();
        }
    }

    source() {
        return [];
    }
}

export {Poison_Powder};
