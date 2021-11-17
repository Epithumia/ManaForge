import {Item} from "@/forge/items/Item";
import {Pixie_Of_Gluttony} from "@/forge/cards/pixies";

class Silly_Eye extends Item {
    constructor() {
        super();
    }

    value = 80

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
        f.explain_item_code += "This item increases the Heavy stat by 25%. "
        f.setHeavy(f.perc125(f.getHeavy()));
        if (f.getEnergy() >= 4) {
            f.explain_item_code += "This also also adds a Pixie (purple hat, Gluttony) card in the pre-hidden slot."
            f.prehidden = new Pixie_Of_Gluttony();
        }
        f.explain_item_code += "<br>"
    }

    source() {
        return []
    }

}

export {Silly_Eye};
