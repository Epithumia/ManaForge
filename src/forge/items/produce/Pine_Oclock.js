import {IMMUNITY} from "@/forge/enums";
import {Ragnarok} from "@/forge/cards/world";
import {Item} from "@/forge/items/Item";

class Pine_Oclock extends Item {


    IPRINT() {
        return "Pine O'Clock";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setImmunity(IMMUNITY.Sleep.value);
        if (f.getSa() * f.getGn() * f.getJi() * f.getUn() > 0
            && f.getEnergy() >= 8) {
            f.prehidden = new Ragnarok();
        }
    }

}

export {Pine_Oclock};
