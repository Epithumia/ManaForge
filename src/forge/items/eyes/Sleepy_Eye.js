import {Pixie_Of_Laziness} from "@/forge/cards/pixies";
import {Item} from "@/forge/items/Item";

class Sleepy_Eye extends Item {
    constructor() {
        super();
    }

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
        f.setThrust(f.perc125(f.getThrust()));
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Laziness();
        }
    }

    source() {
        return [];
    }

}

export {Sleepy_Eye};
