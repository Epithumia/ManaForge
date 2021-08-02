import {Item} from "@/forge/items/Item";
import {Pixie_Of_Gluttony} from "@/forge/cards/pixies";

class Silly_Eye extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Silly Eye"
            case 'jp':
                return "とぼけた瞳"
            default:
                return "Silly Eye"
        }
    }

    energy() {
        return 32
    }

    code(f) {
        f.setHeavy(f.perc125(f.getHeavy()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Gluttony();
        }
    }

    source() {
        return []
    }

}

export {Silly_Eye};
