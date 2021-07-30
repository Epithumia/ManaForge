import {STAT} from "@/forge/enums";
import {Clown} from "@/forge/cards/other";
import {Item} from "@/forge/items/Item";

class Bumpkin extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Bumpkin"
            case 'jp':
                return "パンプキンボム"
            default:
                return "Bumpkin"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.stat_limits(-1, 3, STAT.LCK);
        f.stat_min(3, STAT.LCK);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Clown();
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Bumpkin};
