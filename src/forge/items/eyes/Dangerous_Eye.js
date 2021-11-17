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
        f.explain_item_code += "This item increases the Strike stat by 25%. "
        f.setStrike(f.perc125(f.getStrike()));
        if (f.getEnergy() >= 4) {
            f.explain_item_code += "This also also adds a Pixie (no hat, Greed) card in the pre-hidden slot."
            f.prehidden = new Pixie_Of_Greed();
        }
        f.explain_item_code += "<br>"
    }

    source() {
        return [];
    }

}

export {Dangerous_Eye};
