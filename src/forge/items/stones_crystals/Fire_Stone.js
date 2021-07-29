import {ESSENCE} from "@/forge/enums";
import {Salamander} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Fire_Stone extends Item {

    IPRINT() {
        return "Fire Stone";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Salamander();
        }
    }

}

export {Fire_Stone};
