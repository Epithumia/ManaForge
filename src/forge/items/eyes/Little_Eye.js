import {Pixie_Of_Pride} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Little_Eye extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Little Eye"
            case 'jp':
                return "つぶらな瞳"
            default:
                return "Little Eye"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.setSlash(f.perc125(f.getSlash()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Pride();
        }
    }

    source() {
        return [];
    }

}

export {Little_Eye};
