import {ESSENCE} from "@/forge/enums";
import {Gnome} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Gnome_Silver extends Item {
    constructor() {
        super()
    }

    value = 14

    text(language) {
        switch(language) {
            case 'classic':
                return "Gnome Silver"
            case 'jp':
                return "ノームの銀貨"
            default:
                return "Gnome Silver"
        }
    }

    energy() {
        return 48
    }

    code(f) {
        f.explain_item_code += "This item adds the Gnome card, which goes in the pre-hidden slot. It also adds one Gnome taint point.<br>"
        f.taint(ESSENCE.GNOME);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Gnome();
        }
    }

    source() {
        return ["Collected"];
    }

}

export {Gnome_Silver};
