import {ESSENCE} from "@/forge/enums";
import {Wisp} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Wisp_Gold extends Item {
    constructor() {
        super()
    }

    value = 1

    text(language) {
        switch(language) {
            case 'classic':
                return "Wisp Gold"
            case 'jp':
                return "ウィスプの金貨"
            default:
                return "Wisp Gold"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.explain_item_code += "This item adds the Wisp card, which goes in the pre-hidden slot. " +
            "Depending on the active world card, it will either immediately raise Wisp, or cause it to drain.<br>"
        f.taint(ESSENCE.WISP);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Wisp();
        }
    }

    source() {
        return ["Collected"];
    }

}

export {Wisp_Gold};
