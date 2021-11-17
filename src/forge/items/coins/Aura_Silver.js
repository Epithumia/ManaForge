import {ESSENCE} from "@/forge/enums";
import {Aura} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Aura_Silver extends Item {
    constructor() {
        super()
    }

    value = 12

    text(language) {
        switch(language) {
            case 'classic':
                return "Aura Silver"
            case 'jp':
                return "アウラの銀貨"
            default:
                return "Aura Silver"
        }
    }

    energy() {
        return 48;
    }

    code(f) {
        f.explain_item_code += "This item adds the Aura card, which goes in the pre-hidden slot. It also adds one Aura taint point.<br>"
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
