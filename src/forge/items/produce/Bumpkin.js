import {STAT} from "@/forge/enums";
import {Clown} from "@/forge/cards/other";
import {Item} from "@/forge/items/Item";

class Bumpkin extends Item {


    IPRINT() {
        return "Bumpkin";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.LCK);
        f.stat_min(3, STAT.LCK);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Clown();
        }
    }

}

export {Bumpkin};
