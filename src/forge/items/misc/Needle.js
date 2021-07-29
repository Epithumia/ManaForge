import {Bed_Of_Thorn} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Needle extends Item {


    IPRINT() {
        return "Needle";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (0 === f.getSa() && f.getDr() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Bed_Of_Thorn();
        }
    }

}

export {Needle};
