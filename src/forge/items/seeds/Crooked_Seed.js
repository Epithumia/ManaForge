import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Crooked_Seed extends Item {
    constructor() {
        super();
    }

    value = 27

    text(language) {
        switch(language) {
            case 'classic':
                return "Crooked Seed"
            case 'jp':
                return "ひしゃげた種"
            default:
                return "Crooked Seed"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

    source() {
        return ["Store", "Treant"];
    }

}

export {Crooked_Seed};
