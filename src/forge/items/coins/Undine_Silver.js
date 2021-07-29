import {ESSENCE} from "@/forge/enums";
import {Undine} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items";

class Undine_Silver extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Undine Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

}

export {Undine_Silver};
