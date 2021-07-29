import {Pixie_Of_Jealousy} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Blank_Eye extends Item {


    IPRINT() {
        return "Blank Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setTech(f.perc125(f.getTech()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Jealousy();
        }
    }

}

export {Blank_Eye};
