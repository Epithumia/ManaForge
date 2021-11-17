import {ESSENCE} from "@/forge/enums";
import {Salamander} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Sala_Gold extends Item {
    constructor() {
        super()
    }

    value = 5

    text(language) {
        switch(language) {
            case 'classic':
                return "Sala Gold"
            case 'jp':
                return "サラマンダーの金貨"
            default:
                return "Salamander Gold"
        }
    }

    energy() {
        return 64
    }

    code(f) {
        f.explain_item_code += "This item adds the Salamander card, which goes in the pre-hidden slot. It also adds one Salamander taint point.<br>"
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
