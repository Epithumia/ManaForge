import {Item} from "@/forge/items/Item";
import {Wanderer} from "@/forge/cards/nobles";

class Wad_Of_Wool extends Item {


    IPRINT() {
        return "Wad Of Wool";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getSh() > 0 && f.getDr() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Wanderer();
        }
    }

}

export {Wad_Of_Wool};
