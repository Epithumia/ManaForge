import {Item} from "@/forge/items/Item";
import {Man_Of_Valor} from "@/forge/cards/nobles";

class Dragon_Breath extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Dragon Breath"
            case 'jp':
                return "竜の息"
            default:
                return "Dragon Breath"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.setForce(f.perc125(f.getForce()));
        f.setTech(f.perc125(f.getTech()));
        if (f.getWi() > 0 && f.getSa() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Man_Of_Valor();
        }
    }

    source() {
        return [];
    }

}

export {Dragon_Breath};
