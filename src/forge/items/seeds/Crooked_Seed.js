import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Crooked_Seed extends Item {

    IPRINT() {
        return "Crooked Seed";
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

export {Crooked_Seed};
