import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Oblong_Seed extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Oblong Seed"
            case 'jp':
                return "だえんの種"
            default:
                return "Oblong Seed"
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

export {Oblong_Seed};
