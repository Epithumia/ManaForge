import {Pixie_Of_Jealousy} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Blank_Eye extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Blank Eye"
            case 'jp':
                return "うつろな瞳"
            default:
                return "Blank Eye"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.setTech(f.perc125(f.getTech()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Jealousy();
        }
    }

    source() {
        return [];
    }

}

export {Blank_Eye};
