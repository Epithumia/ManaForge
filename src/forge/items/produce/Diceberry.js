import {Wind_God} from "@/forge/cards/heaven_gods";
import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Diceberry extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Diceberry"
            case 'jp':
                return "さいころいちご"
            default:
                return "Diceberry"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.getJi() >= 3 && f.ESSTOTAL() >= 5) {
            f.prehidden = new Wind_God();
        }
        f.increase_stat(STAT.LCK);
    }

    source() {
        return ["Orchard"];
    }

}

export {Diceberry};
