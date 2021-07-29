import {IMMUNITY} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Zombie_Claw extends Item {


    IPRINT() {
        return "Zombie Claw";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis.value);
        }
    }

}

export {Zombie_Claw};
