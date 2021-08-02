import {ESSENCE} from "@/forge/enums";
import {Aura} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Aura_Gold extends Item {
    constructor() {
        super()
    }

    value = 4

    text(language) {
        switch(language) {
            case 'classic':
                return "Aura Gold"
            case 'jp':
                return "アウラの金貨"
            default:
                return "Aura Gold"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.taint(ESSENCE.AURA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Aura();
        }
    }

    source() {
        return ["Collected"];
    }

}

export {Aura_Gold};
