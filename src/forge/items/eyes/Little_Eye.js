import {Pixie_Of_Pride} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Little_Eye extends Item {


    IPRINT() {
        return "Little Eye";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setSlash(f.perc125(f.getSlash()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Pride();
        }
    }

}

export {Little_Eye};
