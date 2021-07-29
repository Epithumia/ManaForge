import {ESSENCE} from "@/forge/enums";
import {Jinn} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Jinn_Silver extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Jinn Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.JINN);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Jinn();
        }
    }

}

export {Jinn_Silver};
