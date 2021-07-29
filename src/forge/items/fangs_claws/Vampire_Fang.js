import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";
import {Witch_Of_Moon} from "@/forge/cards/evil_gods";

class Vampire_Fang extends Item {


    IPRINT() {
        return "Vampire Fang";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_limits(-3, 5, STAT.SPR);
        f.increase_stat(STAT.CHM);
        f.increase_stat(STAT.SPR);
        if (0 === f.getJi() && f.getUn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Witch_Of_Moon();
        }
    }

}

export {Vampire_Fang};
