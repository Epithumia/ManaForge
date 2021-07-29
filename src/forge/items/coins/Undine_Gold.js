import {ESSENCE} from "@/forge/enums";
import {Undine} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Undine_Gold extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Undine Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

}

export {Undine_Gold};
