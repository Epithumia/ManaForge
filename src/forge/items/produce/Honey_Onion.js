import {Princess} from "@/forge/cards/other";
import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Honey_Onion extends Item {


    IPRINT() {
        return "Honey Onion";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Princess();
        }
        f.taint(ESSENCE.DRYAD);
    }

}

export {Honey_Onion};
