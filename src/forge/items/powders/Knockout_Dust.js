import {Item} from "@/forge/items/Item";
import {Pixie_Of_Gluttony} from "@/forge/cards/pixies";

class Knockout_Dust extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Knockout Dust"
            case 'jp':
                return "まひのこな"
            default:
                return "Knockout Dust"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Gluttony();
        }
    }

    source() {
        return [];
    }
}

export {Knockout_Dust};
