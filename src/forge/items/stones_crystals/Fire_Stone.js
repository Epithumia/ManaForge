import {ESSENCE} from "@/forge/enums";
import {Salamander} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Fire_Stone extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Fire Stone"
            case 'jp':
                return "[Fire Stone]"
            default:
                return "Fire Stone"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Salamander();
        }
    }

    source() {
        return ["Store"];
    }

}

export {Fire_Stone};
