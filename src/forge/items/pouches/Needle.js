import {Item} from "@/forge/items/Item";
import {Bed_Of_Thorn} from "@/forge/cards/stage";

class Needle extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Needle"
            case 'jp':
                return "針"
            default:
                return "Needle"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (0 === f.getSa() && f.getDr() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Bed_Of_Thorn();
        }
    }

    source() {
        return [];
    }
}

export {Needle};
