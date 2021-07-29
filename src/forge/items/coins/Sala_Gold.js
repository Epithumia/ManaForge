import {ESSENCE} from "@/forge/enums";
import {Salamander} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items";

class Sala_Gold extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Salamander Gold";
    }

    ENERGY() {
        return 64;
    }

    CODE(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Salamander();
        }
    }

}

export {Sala_Gold};
