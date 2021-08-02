import {Lord_Of_Flies} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Clear_Feather extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Clear Feather"
            case 'jp':
                return "透明のはね"
            default:
                return "Clear Feather"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.setHeavy(f.perc50(f.getHeavy()));
        f.setTech(f.perc150(f.getTech()));
        if (0 === f.getGn() && f.getJi() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Lord_Of_Flies();
        }
    }

    source() {
        return [];
    }

}

export {Clear_Feather};
