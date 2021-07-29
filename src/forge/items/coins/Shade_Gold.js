import {ESSENCE} from "@/forge/enums";
import {Shade} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items";

class Shade_Gold extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Shade Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.SHADE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Shade();
        }
    }

}

export {Shade_Gold};
