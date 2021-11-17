import {Pixie_Of_Jealousy} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Blank_Eye extends Item {
    constructor() {
        super();
    }

    value = 83

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
        f.explain_item_code += "This item increases the Tech stat by 25%. "
        f.setTech(f.perc125(f.getTech()));
        if (f.getEnergy() >= 4) {
            f.explain_item_code += "This also also adds a Pixie (yellow hat, Envy) card in the pre-hidden slot."
            f.prehidden = new Pixie_Of_Jealousy();
        }
        f.explain_item_code += "<br>"
    }

    source() {
        return [];
    }

}

export {Blank_Eye};
