import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";
import {God_Of_War} from "@/forge/cards/heaven_gods";

class Dragon_Blood extends Item {


    IPRINT() {
        return "Dragon Blood";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.increase_stat(STAT.ALL);
        if (f.getSa() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new God_Of_War();
        }
    }

}

export {Dragon_Blood};
