import {STAT} from "@/forge/enums";
import {Leviathan} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Orangeopus extends Item {


    IPRINT() {
        return "Orange'opus";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.DEF);
        f.increase_stat(STAT.DEF);
        if (0 === f.getSa() && f.getGn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Leviathan();
        }
    }

}

export {Orangeopus};
