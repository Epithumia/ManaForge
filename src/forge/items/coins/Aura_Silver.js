import {ESSENCE} from "@/forge/enums";
import {Aura} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Aura_Silver extends Item {
    constructor() {
        super()
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Aura Silver"
            case 'jp':
                return "[Aura Silver]"
            default:
                return "Aura Silver"
        }
    }

    energy() {
        return 48;
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

export {Aura_Silver};
