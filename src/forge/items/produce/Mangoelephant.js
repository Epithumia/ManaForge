import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Mangoelephant extends Item {


    IPRINT() {
        return "Mangoelephant";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.HP);
        f.increase_stat(STAT.HP);
    }

}

export {Mangoelephant};
