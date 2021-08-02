import {Item} from "@/forge/items/Item";
import {Pixie_Of_Jealousy} from "@/forge/cards/pixies";

class Sleepy_Powder extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Sleepy Powder"
            case 'jp':
                return "ねむりのこな"
            default:
                return "Sleepy Powder"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Jealousy();
        }
    }

    source() {
        return [];
    }
}

export {Sleepy_Powder};
