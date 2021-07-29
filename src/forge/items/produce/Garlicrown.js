import {King} from "@/forge/cards/other";
import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Garlicrown extends Item {


    IPRINT() {
        return "Garlicrown";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new King();
        }
        f.unsticky();
        f.taint(ESSENCE.AURA);
    }

}

export {Garlicrown};
