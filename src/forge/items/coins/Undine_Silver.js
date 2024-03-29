import {ESSENCE} from "@/forge/enums";
import {Undine} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Undine_Silver extends Item {
    constructor() {
        super()
    }

    value = 16

    text(language) {
        switch(language) {
            case 'classic':
                return "Undine Silver"
            case 'jp':
                return "ウンディーネの銀貨"
            default:
                return "Undine Silver"
        }
    }

    energy() {
        return 48;
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

export {Undine_Silver};
