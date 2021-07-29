import {Sacrificed_Nymph} from "@/forge/cards/maidens";
import {Item} from "@/forge/items/Item";

class Ghosts_Howl extends Item {


    IPRINT() {
        return "Ghost's Howl";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Sacrificed_Nymph();
        }
    }

}

export {Ghosts_Howl};
