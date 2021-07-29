import {Pixie_Of_Greed} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Dangerous_Eye extends Item {


    IPRINT() {
        return "Dangerous Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setStrike(f.perc125(f.getStrike()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Greed();
        }
    }

}

export {Dangerous_Eye};
