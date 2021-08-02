import {Pixie_Of_Greed} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Dangerous_Eye extends Item {
    constructor() {
        super();
    }

    value = 81

    text(language) {
        switch(language) {
            case 'classic':
                return "Dangerous Eye"
            case 'jp':
                return "あぶない瞳"
            default:
                return "Dangerous Eye"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.setStrike(f.perc125(f.getStrike()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Greed();
        }
    }

    source() {
        return [];
    }

}

export {Dangerous_Eye};
