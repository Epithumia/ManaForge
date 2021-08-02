import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Small_Seed extends Item {
    constructor() {
        super();
    }

    value = 29

    text(language) {
        switch(language) {
            case 'classic':
                return "Small Seed"
            case 'jp':
                return "ちいさな種"
            default:
                return "Small Seed"
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

export {Small_Seed};
