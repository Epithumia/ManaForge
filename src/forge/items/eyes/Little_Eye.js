import {Pixie_Of_Pride} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Little_Eye extends Item {
    constructor() {
        super();
    }

    value = 78

    text(language) {
        switch(language) {
            case 'classic':
                return "Little Eye"
            case 'jp':
                return "つぶらな瞳"
            default:
                return "Little Eye"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.explain_item_code += "This item increases the Slash stat by 25%. "
        f.setSlash(f.perc125(f.getSlash()));
        if (f.getEnergy() >= 4) {
            f.explain_item_code += "This also also adds a Pixie (red hat, Pride) card in the pre-hidden slot."
            f.prehidden = new Pixie_Of_Pride();
        }
        f.explain_item_code += "<br>"
    }

    source() {
        return [];
    }

}

export {Little_Eye};
