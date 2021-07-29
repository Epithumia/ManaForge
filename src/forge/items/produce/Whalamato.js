import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";
import {Unicorn} from "@/forge/cards/beast_gods";

class Whalamato extends Item {


    IPRINT() {
        return "Whalamato";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.stat_limits(-5, 10, STAT.HP);
        f.stat_min(10, STAT.HP);
        if (f.getGn() >= 3 && f.getUn() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Unicorn();
        }
    }

}

export {Whalamato};
