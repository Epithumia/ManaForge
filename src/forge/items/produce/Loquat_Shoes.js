import {Spirit_Of_Shoes} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Loquat_Shoes extends Item {


    IPRINT() {
        return "Loquat shoes";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.BOOTS() || f.SHOES()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
        }
        if (f.getEnergy() >= 16) {
            f.prehidden = new Spirit_Of_Shoes();
        }
    }

}

export {Loquat_Shoes};
