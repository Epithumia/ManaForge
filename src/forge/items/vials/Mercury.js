import {Item} from "@/forge/items/Item";
import {Witch} from "@/forge/cards/other";

class Mercury extends Item {
    constructor() {
        super();
    }

    value = 97

    text(language) {
        switch(language) {
            case 'classic':
                return "Mercury"
            case 'jp':
                return "水銀"
            default:
                return "Mercury"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Witch();
        }
    }

    source() {
        return [];
    }

}

export {Mercury};
