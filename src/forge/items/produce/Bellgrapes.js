import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Bellgrapes extends Item {


    IPRINT() {
        return "Bellgrapes";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.MAG);
        f.increase_stat(STAT.MAG);
    }

}

export {Bellgrapes};
