import {ESSENCE} from "@/forge/enums";
import {Salamander} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Sala_Silver extends Item {
    constructor() {
        super()
    }

    value = 13

    text(language) {
        switch(language) {
            case 'classic':
                return "Sala Silver"
            case 'jp':
                return "サラマンダーの銀貨"
            default:
                return "Salamander Silver"
        }
    }

    energy() {
        return 48
    }

    code(f) {
        f.taint(ESSENCE.SALA);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Salamander();
        }
    }

    source() {
        return ["Collected"];
    }

}

export {Sala_Silver};
