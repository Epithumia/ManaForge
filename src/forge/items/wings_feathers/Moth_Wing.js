import {Spirit_Of_Forest} from "@/forge/cards/spirits";
import {Item} from "@/forge/items/Item";

class Moth_Wing extends Item {
    constructor() {
        super();
    }

    value = 89

    text(language) {
        switch(language) {
            case 'classic':
                return "Moth Wing"
            case 'jp':
                return "蝶のはね"
            default:
                return "Moth Wing"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.setStrike(f.perc75(f.getStrike()));
        f.setSlash(f.perc75(f.getSlash()));
        f.setThrust(f.perc75(f.getThrust()));
        f.setMagic(f.perc150(f.getMagic()));
        if (f.getEnergy() >= 8) {
            f.prehidden = new Spirit_Of_Forest();
        }
    }

    source() {
        return [];
    }

}

export {Moth_Wing};
