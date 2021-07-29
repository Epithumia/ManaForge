import {Item} from "@/forge/items/Item";
import {Pixie_Of_Jealousy} from "@/forge/cards/pixies";

class Sleepy_Powder extends Item {


    IPRINT() {
        return "Sleepy Powder";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Jealousy();
        }
    }

}

export {Sleepy_Powder};
