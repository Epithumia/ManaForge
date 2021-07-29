import {STAT} from "@/forge/enums";
import {Mother_Of_Gods} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Heart_Mint extends Item {


    IPRINT() {
        return "Heart Mint";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.stat_limits(-1, 3, STAT.CHM);
        f.increase_stat(STAT.CHM);
        if (f.getSh() >= 2 && f.getGn() >= 2 && f.getUn() >= 2
            && f.getEnergy() >= 8) {
            f.prehidden = new Mother_Of_Gods();
        }
    }

}

export {Heart_Mint};
