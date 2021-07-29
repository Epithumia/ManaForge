import {Spirit_Of_Housework} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Hairball extends Item {


    IPRINT() {
        return "Hairball";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Spirit_Of_Housework();
        }
    }

}

export {Hairball};
