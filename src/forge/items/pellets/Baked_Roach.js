import {Item} from "@/forge/items/Item";
import {IMMUNITY} from "@/forge/enums";

class Baked_Roach extends Item {
    constructor() {
        super();
    }

    value = 105

    text(language) {
        switch(language) {
            case 'classic':
                return "Baked Roach"
            case 'jp':
                return "ケムシの黒焼き"
            default:
                return "Baked Roach"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.ROBE()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Poison.value);
        }
    }

    source() {
        return [];
    }

}

export {Baked_Roach};
