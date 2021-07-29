import {Item} from "@/forge/items/Item";
import {ESSENCE, STAT} from "@/forge/enums";
import {Raven} from "@/forge/cards/other";

class Raven_Feather extends Item {


    IPRINT() {
        return "Raven Feather";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.SPR);
        f.increase_stat(STAT.SPR);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Raven();
        }
        f.taint(ESSENCE.SHADE);
    }

}

export {Raven_Feather};
