import {Item} from "@/forge/items/Item";
import {Wanderer} from "@/forge/cards/nobles";

class Wad_Of_Wool extends Item {
    constructor() {
        super();
    }

    value = 117

    text(language) {
        switch(language) {
            case 'classic':
                return "Wad Of Wool"
            case 'jp':
                return "ひとふさのウール"
            default:
                return "Wad Of Wool"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.getSh() > 0 && f.getDr() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Wanderer();
        }
    }

    source() {
        return [];
    }

}

export {Wad_Of_Wool};
