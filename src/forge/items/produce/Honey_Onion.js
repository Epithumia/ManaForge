import {Princess} from "@/forge/cards/other";
import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Honey_Onion extends Item {
    constructor() {
        super();
    }

    value = 51

    text(language) {
        switch(language) {
            case 'classic':
                return "Honey Onion"
            case 'jp':
                return "ハニーオニオン"
            default:
                return "Honey Onion"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Princess();
        }
        f.taint(ESSENCE.DRYAD);
    }

    source() {
        return ["Orchard"];
    }

}

export {Honey_Onion};
