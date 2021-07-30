import {Ocean_God} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Orcaplant extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Orcaplant"
            case 'jp':
                return "シャチナス"
            default:
                return "Orcaplant"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.getUn() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Ocean_God();
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Orcaplant};
