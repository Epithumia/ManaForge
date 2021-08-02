import {Leviathan} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Giants_Horn extends Item {
    constructor() {
        super();
    }

    value = 73

    text(language) {
        switch(language) {
            case 'classic':
                return "Giant's Horn"
            case 'jp':
                return "巨獣の角"
            default:
                return "Giant's Horn"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.setSharp(f.perc50(f.getSharp()));
        f.setHeavy(f.perc150(f.getHeavy()));
        if (0 === f.getSa() && f.getGn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Leviathan();
        }
    }

    source() {
        return [];
    }

}

export {Giants_Horn};
