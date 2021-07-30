import {Spirit_Of_Shoes} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Loquat_Shoes extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Loquat-Shoes"
            case 'jp':
                return "シューズビワ"
            default:
                return "Loquat-Shoe"
        }
    }

    energy() {
        return 16;
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

export {Loquat_Shoes};
