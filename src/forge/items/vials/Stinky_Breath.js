import {Item} from "@/forge/items/Item";
import {IMMUNITY} from "@/forge/enums";
import {Pixie_Of_Lust} from "@/forge/cards/pixies";

class Stinky_Breath extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Stinky Breath"
            case 'jp':
                return "臭い息"
            default:
                return "Stinky Breath"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        f.setImmunity(IMMUNITY.Poison.value
            | IMMUNITY.Confusion.value);
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Lust();
        }
    }

    source() {
        return [];
    }

}

export {Stinky_Breath};
