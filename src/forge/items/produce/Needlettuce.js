import {Bed_Of_Thorn} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Needlettuce extends Item {


    IPRINT() {
        return "Needletuce";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
        f.setHeavy(f.perc75(f.getHeavy()));
        if (0 === f.getSa() && f.getDr() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Bed_Of_Thorn();
        }
    }

}

export {Needlettuce};
