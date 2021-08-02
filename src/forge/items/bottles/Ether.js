import {Item} from "@/forge/items/Item";
import {Blacksmith_God} from "@/forge/cards/heaven_gods";
import {Spirit_Of_Mountain} from "@/forge/cards/spirits";

class Ether extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Ether"
            case 'jp':
                return "エール"
            default:
                return "Ether"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (f.getAu() >= 3 && f.getGn() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Blacksmith_God();
        }
        if (f.getAu() < 3 || f.getGn() < 3) {
            f.prehidden = new Spirit_Of_Mountain();
        }
    }

    source() {
        return [];
    }

}

export {Ether};
