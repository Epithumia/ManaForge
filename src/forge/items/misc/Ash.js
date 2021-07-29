import {Volcano} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Ash extends Item {


    IPRINT() {
        return "Ash";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Volcano();
        }
    }

}

export {Ash};
