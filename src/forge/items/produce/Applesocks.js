import {STAT} from "@/forge/enums";
import {Nymph_Of_Orchards} from "@/forge/cards/maidens";
import {Item} from "@/forge/items/Item";

class Applesocks extends Item {


    IPRINT() {
        return "Applesocks";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.SKL);
        f.increase_stat(STAT.SKL);
        if (f.ESSTOTAL() >= 5 && f.getEnergy() >= 16) {
            f.prehidden = new Nymph_Of_Orchards();
        }
    }

}

export {Applesocks};
