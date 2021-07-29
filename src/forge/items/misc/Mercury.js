import {Witch} from "@/forge/cards/other";
import {Item} from "@/forge/items/Item";

class Mercury extends Item {


    IPRINT() {
        return "Mercury";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Witch();
        }
    }

}

export {Mercury};
