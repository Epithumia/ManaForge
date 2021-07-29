import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Cornflower extends Item {


    IPRINT() {
        return "Cornflower";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.taint(ESSENCE.WISP);
    }

}

export {Cornflower};
