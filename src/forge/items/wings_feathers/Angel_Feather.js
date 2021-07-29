import {ESSENCE, STAT} from "@/forge/enums";
import {Fallen_Angel} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Angel_Feather extends Item {


    IPRINT() {
        return "Angel Feather";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.CHM);
        f.increase_stat(STAT.CHM);
        if (f.getSh() === 0 && f.getWi() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Fallen_Angel();
        }
        f.taint(ESSENCE.WISP);
    }

}

export {Angel_Feather};
