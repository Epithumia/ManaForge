import {Item} from "@/forge/items/Item";
import {Cleric} from "@/forge/cards/other";

class Holy_Water extends Item {
    constructor() {
        super();
    }

    value = 95

    text(language) {
        switch(language) {
            case 'classic':
                return "Holy Water"
            case 'jp':
                return "聖水"
            default:
                return "Holy Water"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        f.explain_item_code += "This item adds the Cleric card, which goes in the pre-hidden slot. It also allows pixies to be pushed.<br>"
        if (f.getEnergy() > 8) {
            f.prehidden = new Cleric();
        }
        f.unsticky();
    }

    source() {
        return [];
    }

}

export {Holy_Water};
