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
        f.setMagic(f.perc125(f.getMagic()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Lust();
        }
    }

    source() {
        return [];
    }

}

export {Creepy_Eye};
