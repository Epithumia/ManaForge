import {STAT} from "@/forge/enums";
import {Leviathan} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Orangeopus extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Orange'opus"
            case 'jp':
                return "タコオレンジ"
            default:
                return "Orange'opus"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.stat_limits(-5, 10, STAT.DEF);
        f.increase_stat(STAT.DEF);
        if (0 === f.getSa() && f.getGn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Leviathan();
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Orangeopus};
