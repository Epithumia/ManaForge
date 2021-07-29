import {ESSENCE} from "@/forge/enums";
import {Aura} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items";

class Aura_Gold extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Aura Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.AURA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Aura();
        }
    }

}

export {Aura_Gold};
