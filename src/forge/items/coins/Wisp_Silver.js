import {ESSENCE} from "@/forge/enums";
import {Wisp} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items";

class Wisp_Silver extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Wisp Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.WISP);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Wisp();
        }
    }

}

export {Wisp_Silver};
