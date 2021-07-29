import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";

class Tako_Bug extends Item {


    IPRINT() {
        return "Tako Bug";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.increase_stat(STAT.CHM);
    }

}

export {Tako_Bug};
