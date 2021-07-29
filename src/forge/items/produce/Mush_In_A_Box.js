import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Mush_In_A_Box extends Item {


    IPRINT() {
        return "Mush-In-A-Box";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.taint(ESSENCE.SHADE);
    }

}

export {Mush_In_A_Box};
