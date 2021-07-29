import {Moon_Goddess} from "@/forge/cards/heaven_gods";
import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Moon_Crystal extends Item {


    IPRINT() {
        return "Moon Crystal";
    }


    ENERGY() {
        return 48;
    }


    CODE(f) {
        if (f.getSh() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Moon_Goddess();
        }
        f.taint(ESSENCE.SHADE);
    }

}

export {Moon_Crystal};
