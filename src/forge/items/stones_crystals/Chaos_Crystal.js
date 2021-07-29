import {Ancient_Moon} from "@/forge/cards/world";
import {Item} from "@/forge/items/Item";

class Chaos_Crystal extends Item {


    IPRINT() {
        return "Chaos Crystal";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getEnergy() >= 16) {
            f.prehidden = new Ancient_Moon();
        }
    }

}

export {Chaos_Crystal};
