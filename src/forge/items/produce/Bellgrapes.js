import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Bellgrapes extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Bellgrapes"
            case 'jp':
                return "すずぶどう"
            default:
                return "Bellgrapes"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.stat_limits(-5, 10, STAT.MAG);
        f.increase_stat(STAT.MAG);
    }

    source() {
        return ["Orchard"];
    }

}

export {Bellgrapes};
