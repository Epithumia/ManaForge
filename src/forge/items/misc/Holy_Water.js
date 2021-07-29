import {Cleric} from "@/forge/cards/other";
import {Item} from "@/forge/items/Item";

class Holy_Water extends Item {


    IPRINT() {
        return "Holy Water";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getEnergy() > 8) {
            f.prehidden = new Cleric();
        }
        f.unsticky();
    }

}

export {Holy_Water};
