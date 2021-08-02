import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Dryad_Gold extends Item {
    constructor() {
        super()
    }

    value = 3

    text(language) {
        switch(language) {
            case 'classic':
                return "Dryad Gold"
            case 'jp':
                return "ドリアードの金貨"
            default:
                return "Dryad Gold"
        }
    }

    energy() {
        return 64
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

export {Dryad_Gold};
