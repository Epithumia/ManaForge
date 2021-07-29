import {ESSENCE} from "@/forge/enums";
import {Shade} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Shade_Silver extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Shade Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.SHADE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Shade();
        }
    }

}

export {Shade_Silver};
