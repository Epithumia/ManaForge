import {STAT} from "@/forge/enums";
import {Enticed_Nymph} from "@/forge/cards/maidens";
import {Item} from "@/forge/items/Item";

class Lilipods extends Item {


    IPRINT() {
        return "Lilipods";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.SPR);
        f.increase_stat(STAT.SPR);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Enticed_Nymph();
        }
    }

}

export {Lilipods};
