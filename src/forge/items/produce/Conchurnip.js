import {STAT} from "@/forge/enums";
import {Spirit_Of_Ocean} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Conchurnip extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Conchurnip"
            case 'jp':
                return "マキガイカブ"
            default:
                return "Conchurnip"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        f.stat_limits(-1, 3, STAT.DEF);
        f.increase_stat(STAT.DEF);
        if (f.getEnergy() >= 16) {
            f.prehidden = new Spirit_Of_Ocean();
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Conchurnip};
