import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Spiny_Carrot extends Item {


    IPRINT() {
        return "Spiny Carrot";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
        f.setHeavy(f.perc75(f.getHeavy()));
        f.taint(ESSENCE.UNDINE);
    }

}

export {Spiny_Carrot};
