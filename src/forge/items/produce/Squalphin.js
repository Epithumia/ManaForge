import {Item} from "@/forge/items/Item";
import {Ocean_God} from "@/forge/cards/heaven_gods";
import {ESSENCE} from "@/forge/enums";

class Squalphin extends Item {


    IPRINT() {
        return "Squalphin";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getUn() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Ocean_God();
        }
        f.taint(ESSENCE.UNDINE);
    }

}

export {Squalphin};
