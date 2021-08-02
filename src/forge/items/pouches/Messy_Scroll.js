import {Item} from "@/forge/items/Item";
import {Sage} from "@/forge/cards/nobles";

class Messy_Scroll extends Item {
    constructor() {
        super();
    }

    value = 118

    text(language) {
        switch(language) {
            case 'classic':
                return "Messy Scroll"
            case 'jp':
                return "読めない巻物"
            default:
                return "Messy Scroll"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.getJi() > 0 && f.getUn() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Sage();
        }
    }

    source() {
        return [];
    }
}

export {Messy_Scroll};
