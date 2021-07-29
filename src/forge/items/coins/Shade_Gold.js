import {ESSENCE} from "@/forge/enums";
import {Shade} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Shade_Gold extends Item {
    constructor() {
        super()
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Shade Gold"
            case 'jp':
                return "[Shade Silver]"
            default:
                return "Shade Gold"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
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
