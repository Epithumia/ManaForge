import {Item} from "@/forge/items/Item";
import {Volcano} from "@/forge/cards/stage";

class Ash extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Ash"
            case 'jp':
                return "灰"
            default:
                return "Ash"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Volcano();
        }
    }

    source() {
        return ["Chest"];
    }
}

export {Ash};
