import {Mirrored_World} from "@/forge/cards/world";
import {Item} from "@/forge/items/Item";

class Mirror_Piece extends Item {


    IPRINT() {
        return "Mirror Piece";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.ESSTOTAL() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Mirrored_World();
        }
    }

}

export {Mirror_Piece};
