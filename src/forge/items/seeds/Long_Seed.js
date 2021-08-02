import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Long_Seed extends Item {
    constructor() {
        super();
    }

    value = 30

    text(language) {
        switch(language) {
            case 'classic':
                return "Long Seed"
            case 'jp':
                return "ほそながい種"
            default:
                return "Long Seed"
        }
    }

    energy() {
        return 24;
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

export {Long_Seed};
