import {Item} from "@/forge/items/Item";
import {ESSENCE} from "@/forge/enums";
import {Undine} from "@/forge/cards/elemental_spirits";

class Water_Stone extends Item {

    IPRINT() {
        return "Water Stone";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

}

export {Water_Stone};
