import {Item} from "@/forge/items/Item";
import {Sorcerer} from "@/forge/cards/other";

class Sulpher extends Item {


    IPRINT() {
        return "Sulpher";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Sorcerer();
        }
    }

}

export {Sulpher};
