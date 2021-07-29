import {Ruler_Of_The_Sky} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Spade_Basil extends Item {


    IPRINT() {
        return "Spade Basil";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
        if (f.getWi() >= 3 && f.ESSTOTAL() >= 6 && f.getEnergy() >= 8) {
            f.prehidden = new Ruler_Of_The_Sky();
        }
    }

}

export {Spade_Basil};
