import {Item} from "@/forge/items/Item";
import {IMMUNITY} from "@/forge/enums";
import {Wings_Of_Darkness} from "@/forge/cards/evil_gods";

class Blackened_Bat extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Blackened Bat"
            case 'jp':
                return "コウモリの黒焼き"
            default:
                return "Blackened Bat"
        }
    }

    energy() {
        return 48;
    }

    code(f) {
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Darkness.value);
        }
        if (0 === f.getWi() && f.getSh() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Wings_Of_Darkness();
        }
    }

    source() {
        return super.source();
    }

}

export {Blackened_Bat};
