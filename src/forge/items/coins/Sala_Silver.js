import {ESSENCE} from "@/forge/enums";
import {Salamander} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items";

class Sala_Silver extends Item {
    constructor() {
        super()
    }

    IPRINT() {
        return "Salamander Silver";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Salamander();
        }
    }

}

export {Sala_Silver};
