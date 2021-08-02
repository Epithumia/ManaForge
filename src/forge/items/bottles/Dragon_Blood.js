import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";
import {God_Of_War} from "@/forge/cards/heaven_gods";

class Dragon_Blood extends Item {
    constructor() {
        super();
    }

    value = 93

    text(language) {
        switch(language) {
            case 'classic':
                return "Dragon Blood"
            case 'jp':
                return "竜の血"
            default:
                return "Dragon Blood"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.increase_stat(STAT.ALL);
        if (f.getSa() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new God_Of_War();
        }
    }

    source() {
        return [];
    }

}

export {Dragon_Blood};
