import {ESSENCE} from "@/forge/enums";
import {Wisp} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Wisp_Silver extends Item {
    constructor() {
        super()
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Wisp Silver"
            case 'jp':
                return "[Wisp Silver]"
            default:
                return "Wisp Silver"
        }
    }

    energy() {
        return 48;
    }

    code(f) {
        f.taint(ESSENCE.WISP);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Wisp();
        }
    }

    source() {
        return ["Collected"];
    }

}

export {Wisp_Silver};
