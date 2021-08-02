import {Item} from "@/forge/items/Item";
import {Thunder_God} from "@/forge/cards/heaven_gods";

class Electricity extends Item {
    constructor() {
        super();
    }

    value = 102

    text(language) {
        switch(language) {
            case 'classic':
                return "Electricity"
            case 'jp':
                return "電気の素"
            default:
                return "Electricity"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        if (f.getWi() >= 3 && f.getSa() >= 3 && f.getJi() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Thunder_God();
        }
    }

    source() {
        return [];
    }

}

export {Electricity};
