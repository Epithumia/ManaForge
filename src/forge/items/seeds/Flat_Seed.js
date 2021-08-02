import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Flat_Seed extends Item {
    constructor() {
        super();
    }

    value = 31

    text(language) {
        switch(language) {
            case 'classic':
                return "Flat Seed"
            case 'jp':
                return "ひらたい種"
            default:
                return "Flat Seed"
        }
    }

    energy() {
        return 48;
    }

    code(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

    source() {
        return ["Drop", "Treant"];
    }

}

export {Flat_Seed};
