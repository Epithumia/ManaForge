import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Cherry_Bombs extends Item {
    constructor() {
        super();
    }

    value = 58

    text(language) {
        switch(language) {
            case 'classic':
                return "Cherry Bombs"
            case 'jp':
                return "ビーダマンベリー"
            default:
                return "Cherry Bombs"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.RING()) {
            f.stat_limits(-3, 9, STAT.ALL);
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Cherry_Bombs};
