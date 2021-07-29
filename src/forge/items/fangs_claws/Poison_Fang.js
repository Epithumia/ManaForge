import {Beast_Headed_God} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Poison_Fang extends Item {


    IPRINT() {
        return "Poison Fang";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.setForce(f.perc50(f.getForce()));
        f.setTech(f.perc150(f.getTech()));
        if (0 === f.getAu() && f.getDr() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Beast_Headed_God();
        }
    }

}

export {Poison_Fang};
