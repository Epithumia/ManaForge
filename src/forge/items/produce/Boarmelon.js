import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Boarmelon extends Item {


    IPRINT() {
        return "Boarmelon";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.PWR);
        f.increase_stat(STAT.PWR);
    }

}

export {Boarmelon};
