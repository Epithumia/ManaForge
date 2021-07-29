import {Dying_Earth} from "@/forge/cards/world";
import {Item} from "@/forge/items/Item";

class Grave_Dirt extends Item {


    IPRINT() {
        return "Grave Dirt";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dying_Earth();
        }
    }

}

export {Grave_Dirt};
