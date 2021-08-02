import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";

class Tako_Bug extends Item {
    constructor() {
        super();
    }

    value = 120

    text(language) {
        switch(language) {
            case 'classic':
                return "Tako Bug"
            case 'jp':
                return "ヘバタのタコムシ"
            default:
                return "Tako Bug"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.increase_stat(STAT.CHM);
    }

    source() {
        return [];
    }

}

export {Tako_Bug};
