import {Pixie_Of_Lust} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Creepy_Eye extends Item {
    constructor() {
        super();
    }

    value = 85

    text(language) {
        switch(language) {
            case 'classic':
                return "Creepy Eye"
            case 'jp':
                return "あやしい瞳"
            default:
                return "Creepy Eye"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.explain_item_code += "This item increases the Tech stat by 25%. "
        f.setMagic(f.perc125(f.getMagic()));
        if (f.getEnergy() >= 4) {
            f.explain_item_code += "This also also adds a Pixie (black hat, Lust) card in the pre-hidden slot."
            f.prehidden = new Pixie_Of_Lust();
        }
        f.explain_item_code += "<br>"
    }

    source() {
        return [];
    }

}

export {Creepy_Eye};
