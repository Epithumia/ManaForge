import {Wisdom_Goddess} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Aroma_Oil extends Item {


    IPRINT() {
        return "Aroma Oil";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        if (f.HIDE()) {
            f.setStrike(f.perc150(f.getStrike()));
            f.setSlash(f.perc150(f.getSlash()));
            f.setThrust(f.perc150(f.getThrust()));
        }
        if (f.ESSTOTAL() >= 6 && f.getEnergy() >= 8) {
            f.prehidden = new Wisdom_Goddess();
        }
    }

}

export {Aroma_Oil};
