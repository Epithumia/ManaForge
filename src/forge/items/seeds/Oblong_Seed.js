import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Oblong_Seed extends Item {

    IPRINT() {
        return "Oblong Seed";
    }

    ENERGY() {
        return 16;
    }

    CODE(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

}

export {Oblong_Seed};
