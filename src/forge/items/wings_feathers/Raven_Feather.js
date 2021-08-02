import {Item} from "@/forge/items/Item";
import {ESSENCE, STAT} from "@/forge/enums";
import {Raven} from "@/forge/cards/other";

class Raven_Feather extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Raven Feather"
            case 'jp':
                return "漆黒のはね"
            default:
                return "Raven Feather"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.stat_limits(-3, 5, STAT.SPR);
        f.increase_stat(STAT.SPR);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Raven();
        }
        f.taint(ESSENCE.SHADE);
    }

    source() {
        return [];
    }

}

export {Raven_Feather};
