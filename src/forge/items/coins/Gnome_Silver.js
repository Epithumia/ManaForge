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
