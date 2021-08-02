import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";
import {Nymph_Of_The_Sky} from "@/forge/cards/maidens";

class White_Feather extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "White Feather"
            case 'jp':
                return "天馬のはね"
            default:
                return "White Feather"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_min(5, STAT.SKL);
        if (f.getWi() > 0 && f.ESSTOTAL() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Nymph_Of_The_Sky();
        }
    }

    source() {
        return [];
    }

}

export {White_Feather};
