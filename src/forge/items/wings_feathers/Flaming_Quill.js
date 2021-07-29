import {STAT} from "@/forge/enums";
import {Phoenix} from "@/forge/cards/beast_gods";
import {Item} from "@/forge/items/Item";

class Flaming_Quill extends Item {


    IPRINT() {
        return "Flaming Quill";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-3, 5, STAT.PWR);
        f.stat_min(5, STAT.PWR);
        if (f.getSa() >= 3 && f.getJi() >= 3 && f.getEnergy() >= 4) {
            f.prehidden = new Phoenix();
        }
    }

}

export {Flaming_Quill};
