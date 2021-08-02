import {Spring} from "@/forge/cards/stage";
import {ESSENCE, STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Fishy_Fruit extends Item {
    constructor() {
        super();
    }

    value = 46

    text(language) {
        switch(language) {
            case 'classic':
                return "Fishy Fruit"
            case 'jp':
                return "フィッシュフルーツ"
            default:
                return "Fishy Fruit"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.prehidden = new Spring();
        f.stat_limits(-1, 3, STAT.MAG);
        f.increase_stat(STAT.MAG);
        f.taint(ESSENCE.UNDINE);
    }

    source() {
        return ["Orchard"];
    }

}

export {Fishy_Fruit};
