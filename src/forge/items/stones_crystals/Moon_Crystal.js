import {Moon_Goddess} from "@/forge/cards/heaven_gods";
import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Moon_Crystal extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Moon Crystal"
            case 'jp':
                return "[Moon Crystal]"
            default:
                return "Moon Crystal"
        }
    }

    energy() {
        return 48
    }

    code(f) {
        if (f.getSh() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Moon_Goddess();
        }
        f.taint(ESSENCE.SHADE);
    }

    source() {
        return ["Store"];
    }

}

export {Moon_Crystal};
