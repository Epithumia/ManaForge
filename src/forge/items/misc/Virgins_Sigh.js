import {Item} from "@/forge/items/Item";
import {Goddess_Of_Love} from "@/forge/cards/heaven_gods";

class Virgins_Sigh extends Item {


    IPRINT() {
        return "Virgin's Sigh";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getSh() >= 3 && f.getDr() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Goddess_Of_Love();
        }
    }

}

export {Virgins_Sigh};
