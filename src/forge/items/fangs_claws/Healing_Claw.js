import {IMMUNITY} from "@/forge/enums";
import {Tower} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Healing_Claw extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Healing Claw"
            case 'jp':
                return "いやしの爪"
            default:
                return "Healing Claw"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.SHIELD()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Poison.value);
        }
        if (0 === f.getSa() && f.getWi() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Tower();
        }
    }

    source() {
        return [];
    }

}

export {Healing_Claw};
