import {STAT} from "@/forge/enums";
import {Tower} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Rocket_Papaya extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Rocket Papaya"
            case 'jp':
                return "ロケットパパイヤ"
            default:
                return "Rocket Papaya"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.stat_limits(-5, 10, STAT.CHM);
        f.increase_stat(STAT.CHM);
        if (0 === f.getJi() && f.getWi() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Tower();
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Rocket_Papaya};
