import {Metropolis} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Dialaurel extends Item {


    IPRINT() {
        return "Dialaurel";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        if (0 === f.getSa() && f.getSh() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Metropolis();
        }
    }

}

export {Dialaurel};
