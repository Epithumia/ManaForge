import {Item} from "@/forge/items/Item";
import {ESSENCE} from "@/forge/enums";
import {Jinn} from "@/forge/cards/elemental_spirits";

class Wind_Stone extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Wind Stone"
            case 'jp':
                return "[Wind Stone]"
            default:
                return "Wind Stone"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.taint(ESSENCE.JINN);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Jinn();
        }
    }

    source() {
        return ["Store"];
    }

}

export {Wind_Stone};
