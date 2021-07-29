import {IMMUNITY} from "@/forge/enums";
import {Tower} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Healing_Claw extends Item {


    IPRINT() {
        return "Healing Claw";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.SHIELD()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Poison.value);
        }
        if (0 === f.getSa() && f.getWi() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Tower();
        }
    }

}

export {Healing_Claw};
