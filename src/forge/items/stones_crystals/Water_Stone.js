import {Item} from "@/forge/items/Item";
import {ESSENCE} from "@/forge/enums";
import {Undine} from "@/forge/cards/elemental_spirits";

class Water_Stone extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Water Stone"
            case 'jp':
                return "[Water Stone]"
            default:
                return "Water Stone"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

    source() {
        return ["Stone"];
    }

}

export {Water_Stone};
