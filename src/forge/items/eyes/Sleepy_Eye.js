import {Pixie_Of_Laziness} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Sleepy_Eye extends Item {


    IPRINT() {
        return "Sleepy Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setThrust(f.perc125(f.getThrust()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Laziness();
        }
    }

}

export {Sleepy_Eye};
