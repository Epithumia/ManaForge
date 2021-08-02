import {Item} from "@/forge/items/Item";
import {Goddess_Of_Love} from "@/forge/cards/heaven_gods";

class Virgins_Sigh extends Item {
    constructor() {
        super();
    }

    value = 101

    text(language) {
        switch(language) {
            case 'classic':
                return "Virgin's Sigh"
            case 'jp':
                return "乙女のため息"
            default:
                return "Damsel’s Sigh"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.getSh() >= 3 && f.getDr() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Goddess_Of_Love();
        }
    }

    source() {
        return [];
    }

}

export {Virgins_Sigh};
