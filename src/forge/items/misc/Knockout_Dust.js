import {Pixie_Of_Gluttony} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Knockout_Dust extends Item {


    IPRINT() {
        return "Knockout Dust";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Gluttony();
        }
    }

}

export {Knockout_Dust};
