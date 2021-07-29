import {IMMUNITY} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Baked_Roach extends Item {


    IPRINT() {
        return "Baked Roach";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.ROBE()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Poison.value);
        }
    }

}

export {Baked_Roach};
