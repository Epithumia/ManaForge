import {Fertility_Goddess} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Ear_Of_Wheat extends Item {


    IPRINT() {
        return "Ear Of Wheat";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.getDr() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Fertility_Goddess();
        }
    }

}

export {Ear_Of_Wheat};
