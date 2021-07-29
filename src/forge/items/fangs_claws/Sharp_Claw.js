import {Item} from "@/forge/items/Item";
import {God_Of_Destruction} from "@/forge/cards/evil_gods";

class Sharp_Claw extends Item {


    IPRINT() {
        return "Sharp Claw";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setSharp(f.perc150(f.getSharp()));
        f.setHeavy(f.perc50(f.getHeavy()));
        if (0 === f.getUn() && f.getSa() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new God_Of_Destruction();
        }
    }

}

export {Sharp_Claw};
