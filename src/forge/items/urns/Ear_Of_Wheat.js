import {Item} from "@/forge/items/Item";
import {Fertility_Goddess} from "@/forge/cards/heaven_gods";

class Ear_Of_Wheat extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Ear Of Wheat"
            case 'jp':
                return "ムギの穂"
            default:
                return "Ear Of Wheat"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.getDr() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Fertility_Goddess();
        }
    }

    source() {
        return [];
    }

}

export {Ear_Of_Wheat};
