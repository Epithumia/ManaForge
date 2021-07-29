import {Item} from "@/forge/items/Item";
import {Sun_God} from "@/forge/cards/heaven_gods";
import {ESSENCE} from "@/forge/enums";

class Sun_Crystal extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Sun Crystal"
            case 'jp':
                return "[Sun Crystal]"
            default:
                return "Sun Crystal"
        }
    }

    energy() {
        return 48;
    }

    code(f) {
        if (f.getWi() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Sun_God();
        }
        f.taint(ESSENCE.WISP);
    }

    source() {
        return ["Store"];
    }

}

export {Sun_Crystal};
