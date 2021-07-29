import {IMMUNITY} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Rhinoloupe extends Item {


    IPRINT() {
        return "Rhinoloupe";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
        f.setImmunity(IMMUNITY.Poison.value);
    }

}

export {Rhinoloupe};
