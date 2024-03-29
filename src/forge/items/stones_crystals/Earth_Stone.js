import {ESSENCE} from "@/forge/enums";
import {Gnome} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Earth_Stone extends Item {
    constructor() {
        super();
    }

    value = 18

    text(language) {
        switch(language) {
            case 'classic':
                return "Earth Stone"
            case 'jp':
                return "土のマナストーン"
            default:
                return "Earth Stone"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.taint(ESSENCE.GNOME);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Gnome();
        }
    }

    source() {
        return ["Store"];
    }

}

export {Earth_Stone};
