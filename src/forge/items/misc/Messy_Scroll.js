import {Sage} from "@/forge/cards/nobles";
import {Item} from "@/forge/items/Item";

class Messy_Scroll extends Item {


    IPRINT() {
        return "Messy Scroll";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getJi() > 0 && f.getUn() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Sage();
        }
    }

}

export {Messy_Scroll};
