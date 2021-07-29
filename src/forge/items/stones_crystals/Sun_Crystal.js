import {Item} from "@/forge/items/Item";
import {Sun_God} from "@/forge/cards/heaven_gods";
import {ESSENCE} from "@/forge/enums";

class Sun_Crystal extends Item {


    IPRINT() {
        return "Sun Crystal";
    }


    ENERGY() {
        return 48;
    }


    CODE(f) {
        if (f.getWi() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Sun_God();
        }
        f.taint(ESSENCE.WISP);
    }

}

export {Sun_Crystal};
