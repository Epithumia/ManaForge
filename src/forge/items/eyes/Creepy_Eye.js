import {Pixie_Of_Lust} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Creepy_Eye extends Item {


    IPRINT() {
        return "Creepy Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setMagic(f.perc125(f.getMagic()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Lust();
        }
    }

}

export {Creepy_Eye};
