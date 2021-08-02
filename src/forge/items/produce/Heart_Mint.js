import {STAT} from "@/forge/enums";
import {Mother_Of_Gods} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Heart_Mint extends Item {
    constructor() {
        super();
    }

    value = 64

    text(language) {
        switch(language) {
            case 'classic':
                return "Heart Mint"
            case 'jp':
                return "ハートミント"
            default:
                return "Heart Mint"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.stat_limits(-1, 3, STAT.CHM);
        f.increase_stat(STAT.CHM);
        if (f.getSh() >= 2 && f.getGn() >= 2 && f.getUn() >= 2
            && f.getEnergy() >= 8) {
            f.prehidden = new Mother_Of_Gods();
        }
    }

    source() {
        return ["Store", "Orchard"];
    }

}

export {Heart_Mint};
