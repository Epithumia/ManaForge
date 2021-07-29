import {ESSENCE} from "@/forge/enums";
import {Gnome} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Gnome_Gold extends Item {
    constructor() {
        super()
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Gnome Gold"
            case 'jp':
                return "[Gnome Gold]"
            default:
                return "Gnome Gold"
        }
    }

    energy() {
        return 64
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

export {Gnome_Gold};
