import {Blacksmith_God} from "@/forge/cards/heaven_gods";
import {Spirit_Of_Mountain} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Ether extends Item {


    IPRINT() {
        return "Ether";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getAu() >= 3 && f.getGn() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Blacksmith_God();
        }
        if (f.getAu() < 3 || f.getGn() < 3) {
            f.prehidden = new Spirit_Of_Mountain();
        }
    }

}

export {Ether};
