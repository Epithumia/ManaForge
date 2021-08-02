import {Item} from "@/forge/items/Item";
import {Dying_Earth} from "@/forge/cards/world";

class Grave_Dirt extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Grave Dirt"
            case 'jp':
                return "墓場の土"
            default:
                return "Grave Dirt"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dying_Earth();
        }
    }

    source() {
        return [];
    }
}

export {Grave_Dirt};
