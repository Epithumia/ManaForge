import {ESSENCE} from "@/forge/enums";
import {Undine} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Undine_Silver extends Item {
    constructor() {
        super()
    }

    value = 16

    text(language) {
        switch(language) {
            case 'classic':
                return "Undine Silver"
            case 'jp':
                return "ウンディーネの銀貨"
            default:
                return "Undine Silver"
        }
    }

    energy() {
        return 48;
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

export {Undine_Silver};
