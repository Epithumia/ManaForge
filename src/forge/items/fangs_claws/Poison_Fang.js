import {Beast_Headed_God} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Poison_Fang extends Item {
    constructor() {
        super();
    }

    value = 72

    text(language) {
        switch(language) {
            case 'classic':
                return "Poison Fang"
            case 'jp':
                return "毒の牙"
            default:
                return "Poison Fang"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.setForce(f.perc50(f.getForce()));
        f.setTech(f.perc150(f.getTech()));
        if (0 === f.getAu() && f.getDr() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Beast_Headed_God();
        }
    }

    source() {
        return []
    }

}

export {Poison_Fang};
