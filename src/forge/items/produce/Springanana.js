import {Heavens_Scale} from "@/forge/cards/world";
import {Item} from "@/forge/items/Item";

class Springanana extends Item {


    IPRINT() {
        return "Springanana";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Heavens_Scale();
        }
    }

}

export {Springanana};
