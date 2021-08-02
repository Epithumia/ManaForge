import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Boarmelon extends Item {
    constructor() {
        super();
    }

    value = 47

    text(language) {
        switch(language) {
            case 'classic':
                return "Boarmelon"
            case 'jp':
                return "ウリぼうスイカ"
            default:
                return "Boarmelon"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.stat_limits(-1, 3, STAT.PWR);
        f.increase_stat(STAT.PWR);
    }

    source() {
        return ["Orchard"];
    }

}

export {Boarmelon};
