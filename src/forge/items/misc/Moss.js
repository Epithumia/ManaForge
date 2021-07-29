import {IMMUNITY} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Moss extends Item {


    IPRINT() {
        return "Moss";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.HELM()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Darkness.value);
        }
    }

}

export {Moss};
