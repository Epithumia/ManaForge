import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Cherry_Bombs extends Item {


    IPRINT() {
        return "Cherry Bombs";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.RING()) {
            f.stat_limits(-3, 9, STAT.ALL);
        }
    }

}

export {Cherry_Bombs};
