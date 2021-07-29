import {STAT} from "@/forge/enums";
import {Spirit_Of_Ocean} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Conchurnip extends Item {


    IPRINT() {
        return "Conchurnip";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.DEF);
        f.increase_stat(STAT.DEF);
        if (f.getEnergy() >= 16) {
            f.prehidden = new Spirit_Of_Ocean();
        }
    }

}

export {Conchurnip};
