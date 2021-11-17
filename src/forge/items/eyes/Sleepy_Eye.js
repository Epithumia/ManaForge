import {Pixie_Of_Laziness} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Sleepy_Eye extends Item {
    constructor() {
        super();
    }

    value = 79

    text(language) {
        switch(language) {
            case 'classic':
                return "Sleepy Eye"
            case 'jp':
                return "ねむたい瞳"
            default:
                return "Sleepy Eye"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.explain_item_code += "This item increases the Heavy stat by 25%. "
        f.setThrust(f.perc125(f.getThrust()));
        if (f.getEnergy() >= 4) {
            f.explain_item_code += "This also also adds a Pixie (blue hat, Sloth) card in the pre-hidden slot."
            f.prehidden = new Pixie_Of_Laziness();
        }
        f.explain_item_code += "<br>"
    }

    source() {
        return [];
    }

}

export {Sleepy_Eye};
