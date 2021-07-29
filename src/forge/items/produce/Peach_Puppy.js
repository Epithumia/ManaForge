import {Wolf} from "@/forge/cards/other";
import {Item} from "@/forge/items/Item";

class Peach_Puppy extends Item {


    IPRINT() {
        return "Peach Puppy";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Wolf();
        }
        f.setSharp(f.perc125(f.getSharp()));
        f.setHeavy(f.perc75(f.getHeavy()));
    }

}

export {Peach_Puppy};
