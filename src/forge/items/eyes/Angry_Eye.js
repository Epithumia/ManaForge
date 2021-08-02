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
        f.setForce(f.perc125(f.getForce()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Rage();
        }
    }

    source() {
        return [];
    }

}

export {Angry_Eye};
