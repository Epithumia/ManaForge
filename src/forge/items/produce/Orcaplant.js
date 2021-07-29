import {Ocean_God} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Orcaplant extends Item {


    IPRINT() {
        return "Orcaplant";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getUn() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Ocean_God();
        }
    }

}

export {Orcaplant};
