import {Item} from "@/forge/items/Item";
import {Wisdom_Goddess} from "@/forge/cards/heaven_gods";

class Aroma_Oil extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Aroma Oil"
            case 'jp':
                return "香油"
            default:
                return "Aroma Oil"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.HIDE()) {
            f.setStrike(f.perc150(f.getStrike()));
            f.setSlash(f.perc150(f.getSlash()));
            f.setThrust(f.perc150(f.getThrust()));
        }
        if (f.ESSTOTAL() >= 6 && f.getEnergy() >= 8) {
            f.prehidden = new Wisdom_Goddess();
        }
    }

    source() {
        return [];
    }

}

export {Aroma_Oil};
