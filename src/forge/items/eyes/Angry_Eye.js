import {Pixie_Of_Rage} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Angry_Eye extends Item {


    IPRINT() {
        return "Angry Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setForce(f.perc125(f.getForce()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Rage();
        }
    }

}

export {Angry_Eye};
