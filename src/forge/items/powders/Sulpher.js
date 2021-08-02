import {Item} from "@/forge/items/Item";
import {Sorcerer} from "@/forge/cards/other";

class Sulpher extends Item {
    constructor() {
        super();
    }

    value = 107

    text(language) {
        switch(language) {
            case 'classic':
                return "Sulpher"
            case 'jp':
                return "イオウ"
            default:
                return "Sulfur"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Sorcerer();
        }
    }

    source() {
        return ["Store"];
    }
}

export {Sulpher};
