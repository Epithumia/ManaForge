import {Yggdrasil} from "@/forge/cards/world";
import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Spiny_Seed extends Item {
    constructor() {
        super();
    }

    value = 32

    text(language) {
        switch(language) {
            case 'classic':
                return "Spiny Seed"
            case 'jp':
                return "とげとげの種"
            default:
                return "Spiny Seed"
        }
    }

    energy() {
        return 48;
    }

    code(f) {
        if (f.getDr() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Yggdrasil();
        }
        f.taint(ESSENCE.DRYAD);
    }

    source() {
        return ["Drop", "Treant"];
    }

}

export {Spiny_Seed};
