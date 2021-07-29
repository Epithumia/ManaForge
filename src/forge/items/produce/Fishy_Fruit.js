import {Spring} from "@/forge/cards/stage";
import {ESSENCE, STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Fishy_Fruit extends Item {


    IPRINT() {
        return "Fishy Fruit";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.prehidden = new Spring();
        f.stat_limits(-1, 3, STAT.MAG);
        f.increase_stat(STAT.MAG);
        f.taint(ESSENCE.UNDINE);
    }

}

export {Fishy_Fruit};
