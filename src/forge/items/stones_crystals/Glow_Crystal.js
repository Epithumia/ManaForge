import {Nymph_Of_Dawn} from "@/forge/cards/maidens";
import {Item} from "@/forge/items/Item";

class Glow_Crystal extends Item {
    constructor() {
        super();
    }

    value = 23

    text(language) {
        switch(language) {
            case 'classic':
                return "Glow Crystal"
            case 'jp':
                return "輝きのクリスタル"
            default:
                return "Glow Crystal"
        }
    }

    energy() {
        return 96;
    }

    code(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Nymph_Of_Dawn();
        }
    }

    source() {
        return ["Store"];
    }

}

export {Glow_Crystal};
