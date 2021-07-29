import {Wind_God} from "@/forge/cards/heaven_gods";
import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Diceberry extends Item {


    IPRINT() {
        return "Diceberry";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        if (f.getJi() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Wind_God();
        }
        f.increase_stat(STAT.LCK);
    }

}

export {Diceberry};
