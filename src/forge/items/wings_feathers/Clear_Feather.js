import {Lord_Of_Flies} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Clear_Feather extends Item {


    IPRINT() {
        return "Clear Feather";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setHeavy(f.perc50(f.getHeavy()));
        f.setTech(f.perc150(f.getTech()));
        if (0 === f.getGn() && f.getJi() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Lord_Of_Flies();
        }
    }

}

export {Clear_Feather};
