import {IMMUNITY} from "@/forge/enums";
import {Wings_Of_Darkness} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Blackened_Bat extends Item {


    IPRINT() {
        return "Blackened Bat";
    }


    ENERGY() {
        return 48;
    }


    CODE(f) {
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Darkness.value);
        }
        if (0 === f.getWi() && f.getSh() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Wings_Of_Darkness();
        }
    }

}

export {Blackened_Bat};
