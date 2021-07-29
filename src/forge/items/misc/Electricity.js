import {Thunder_God} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Electricity extends Item {


    IPRINT() {
        return "Electricity";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.getWi() >= 3 && f.getSa() >= 3 && f.getJi() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Thunder_God();
        }
    }

}

export {Electricity};
