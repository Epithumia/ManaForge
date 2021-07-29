import {Nymph_Of_Dawn} from "@/forge/cards/maidens";
import {Item} from "@/forge/items/Item";

class Glow_Crystal extends Item {


    IPRINT() {
        return "Glow Crystal";
    }


    ENERGY() {
        return 96;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Nymph_Of_Dawn();
        }
    }

}

export {Glow_Crystal};
