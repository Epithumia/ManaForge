import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Big_Seed extends Item {

    IPRINT() {
        return "Big Seed";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}

export {Big_Seed};
