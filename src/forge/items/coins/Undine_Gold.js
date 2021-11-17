import {ESSENCE} from "@/forge/enums";
import {Undine} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Undine_Gold extends Item {
    constructor() {
        super()
    }

    value = 8

    text(language) {
        switch(language) {
            case 'classic':
                return "Undine Gold"
            case 'jp':
                return "ウンディーネの金貨"
            default:
                return "Undine Gold"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.explain_item_code += "This item adds the Undine card, which goes in the pre-hidden slot. It also adds one Undine taint point.<br>"
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

    source() {
        return ["Collected"]
    }

}

export {Undine_Gold};
