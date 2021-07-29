import {STAT} from "@/forge/enums";
import {Tower} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Rocket_Papaya extends Item {


    IPRINT() {
        return "Rocket Papaya";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.CHM);
        f.increase_stat(STAT.CHM);
        if (0 === f.getJi() && f.getWi() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Tower();
        }
    }

}

export {Rocket_Papaya};
