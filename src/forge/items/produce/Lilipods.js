import {STAT} from "@/forge/enums";
import {Enticed_Nymph} from "@/forge/cards/maidens";
import {Item} from "@/forge/items/Item";

class Lilipods extends Item {
    constructor() {
        super();
    }

    value = 60

    text(language) {
        switch(language) {
            case 'classic':
                return "Lilipods"
            case 'jp':
                return "ユリグリンピース"
            default:
                return "Lilipods"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.stat_limits(-1, 3, STAT.SPR);
        f.increase_stat(STAT.SPR);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Enticed_Nymph();
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Lilipods};
