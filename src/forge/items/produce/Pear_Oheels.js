import {Spirit_Of_Shoes} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Pear_Oheels extends Item {
    constructor() {
        super();
    }

    value = 37

    text(language) {
        switch(language) {
            case 'classic':
                return "Pear o'Heels"
            case 'jp':
                return "ハイピールペア"
            default:
                return "Pear o'Heels"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        if (f.BOOTS() || f.SHOES()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
        }
        if (f.getEnergy() >= 16) {
            f.prehidden = new Spirit_Of_Shoes();
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Pear_Oheels};
