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
        f.explain_item_code += "This item adds the Dryad card, which goes in the pre-hidden slot. It also adds one Dryad taint point.<br>"
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
