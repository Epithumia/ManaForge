import {Pixie_Of_Rage} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Poison_Powder extends Item {


    IPRINT() {
        return "Poison Powder";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Rage();
        }
    }

}

export {Poison_Powder};
