import {ESSENCE} from "@/forge/enums";
import {Undine} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Undine_Gold extends Item {
    constructor() {
        super()
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Undine Gold"
            case 'jp':
                return "[Undine Gold]"
            default:
                return "Undine Gold"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.taint(ESSENCE.UNDINE);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Undine();
        }
    }

    source() {
        return ["Collected"]
    }

}

export {Undine_Gold};
