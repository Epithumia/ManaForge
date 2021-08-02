import {ESSENCE} from "@/forge/enums";
import {Shade} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Shade_Silver extends Item {
    constructor() {
        super()
    }

    value = 10

    text(language) {
        switch(language) {
            case 'classic':
                return "Shade Silver"
            case 'jp':
                return "シェイドの銀貨"
            default:
                return "Shade Silver"
        }
    }

    energy() {
        return 48;
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

export {Shade_Silver};
