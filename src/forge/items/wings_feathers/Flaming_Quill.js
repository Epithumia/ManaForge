import {STAT} from "@/forge/enums";
import {Phoenix} from "@/forge/cards/beast_gods";
import {Item} from "@/forge/items/Item";

class Flaming_Quill extends Item {
    constructor() {
        super();
    }

    value = 90

    text(language) {
        switch(language) {
            case 'classic':
                return "Flaming Quill"
            case 'jp':
                return "燃えさかるはね"
            default:
                return "Flaming Quill"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.stat_limits(-3, 5, STAT.PWR);
        f.stat_min(5, STAT.PWR);
        if (f.getSa() >= 3 && f.getJi() >= 3 && f.getEnergy() >= 4) {
            f.prehidden = new Phoenix();
        }
    }

    source() {
        return [];
    }

}

export {Flaming_Quill};
