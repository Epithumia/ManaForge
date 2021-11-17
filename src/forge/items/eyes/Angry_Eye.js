import {Pixie_Of_Rage} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Angry_Eye extends Item {
    constructor() {
        super();
    }

    value = 82

    text(language) {
        switch(language) {
            case 'classic':
                return "Angry Eye"
            case 'jp':
                return "けわしい瞳"
            default:
                return "Angry Eye"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.explain_item_code += "This item increases the Force stat by 25%. "
        f.setForce(f.perc125(f.getForce()));
        if (f.getEnergy() >= 4) {
            f.explain_item_code += "This also also adds a Pixie (light-blue hat, Wrath) card in the pre-hidden slot."
            f.prehidden = new Pixie_Of_Rage();
        }
        f.explain_item_code += "<br>"
    }

    source() {
        return [];
    }

}

export {Angry_Eye};
