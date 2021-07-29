import {ESSENCE} from "@/forge/enums";
import {Salamander} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Sala_Gold extends Item {
    constructor() {
        super()
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Sala Gold"
            case 'jp':
                return "[Sala Gold]"
            default:
                return "Salamander Gold"
        }
    }

    energy() {
        return 64
    }

    code(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Salamander();
        }
    }

    source() {
        return ["Collected"];
    }
}

export {Sala_Gold};
