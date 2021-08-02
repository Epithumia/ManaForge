import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";
import {Witch_Of_Moon} from "@/forge/cards/evil_gods";

class Vampire_Fang extends Item {
    constructor() {
        super();
    }

    value = 77

    text(language) {
        switch(language) {
            case 'classic':
                return "Vampire Fang"
            case 'jp':
                return "吸血牙"
            default:
                return "Vampire Fang"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_limits(-3, 5, STAT.SPR);
        f.increase_stat(STAT.CHM);
        f.increase_stat(STAT.SPR);
        if (0 === f.getJi() && f.getUn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Witch_Of_Moon();
        }
    }

    source() {
        return [];
    }

}

export {Vampire_Fang};
