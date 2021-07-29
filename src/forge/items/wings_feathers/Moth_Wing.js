import {Spirit_Of_Forest} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Moth_Wing extends Item {


    IPRINT() {
        return "Moth Wing";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setStrike(f.perc75(f.getStrike()));
        f.setSlash(f.perc75(f.getSlash()));
        f.setThrust(f.perc75(f.getThrust()));
        f.setMagic(f.perc150(f.getMagic()));
        if (f.getEnergy() >= 8) {
            f.prehidden = new Spirit_Of_Forest();
        }
    }

}

export {Moth_Wing};
