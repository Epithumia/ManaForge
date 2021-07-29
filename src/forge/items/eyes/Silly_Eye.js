import {Item} from "@/forge/items/Item";
import {Pixie_Of_Gluttony} from "@/forge/cards/pixies";

class Silly_Eye extends Item {


    IPRINT() {
        return "Silly Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setHeavy(f.perc125(f.getHeavy()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Gluttony();
        }
    }

}

export {Silly_Eye};
