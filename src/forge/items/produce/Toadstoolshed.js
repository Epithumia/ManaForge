import {Item} from "@/forge/items/Item";
import {ESSENCE, STAT} from "@/forge/enums";

class Toadstoolshed extends Item {


    IPRINT() {
        return "Toadstoolshed";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.increase_stat(STAT.ALL);
        f.taint(ESSENCE.SHADE);
    }

}

export {Toadstoolshed};
