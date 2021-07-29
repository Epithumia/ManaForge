import {Item} from "@/forge/items/Item";
import {ESSENCE} from "@/forge/enums";
import {Jinn} from "@/forge/cards/elemental_spirits";

class Wind_Stone extends Item {

    IPRINT() {
        return "Wind Stone";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.JINN);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Jinn();
        }
    }

}

export {Wind_Stone};
