import {Spirit_Of_Housework} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Hairball extends Item {
    constructor() {
        super();
    }

    value = 114

    text(language) {
        switch(language) {
            case 'classic':
                return "Hairball"
            case 'jp':
                return "ふさふさのけだま"
            default:
                return "Hairball"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Spirit_Of_Housework();
        }
    }

    source() {
        return [];
    }
}

export {Hairball};
