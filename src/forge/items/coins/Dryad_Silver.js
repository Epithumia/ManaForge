import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Dryad_Silver extends Item {
    constructor() {
        super()
    }

    value = 11

    text(language) {
        switch(language) {
            case 'classic':
                return "Dryad Silver"
            case 'jp':
                return "ドリアードの銀貨"
            default:
                return "Dryad Silver"
        }
    }

    energy() {
        return 48
    }

    code(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

    source() {
        return ["Collected"];
    }
}

export {Dryad_Silver};
