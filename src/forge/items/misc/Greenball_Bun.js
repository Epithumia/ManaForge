import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Greenball_Bun extends Item {


    IPRINT() {
        return "Greenball Bun";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.increase_stat(STAT.HP);
    }

}

export {Greenball_Bun};
