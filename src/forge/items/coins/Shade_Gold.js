import {ESSENCE} from "@/forge/enums";
import {Shade} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Shade_Gold extends Item {
    constructor() {
        super()
    }

    value = 2

    text(language) {
        switch(language) {
            case 'classic':
                return "Shade Gold"
            case 'jp':
                return "シェイドの金貨"
            default:
                return "Shade Gold"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.explain_item_code += "This item adds the Shade card, which goes in the pre-hidden slot. " +
            "Depending on the active world card, it will either immediately raise Shade, or cause it to drain.<br>"
        f.taint(ESSENCE.SHADE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Shade();
        }
    }

    source() {
        return ["Collected"];
    }

}

export {Shade_Gold};
