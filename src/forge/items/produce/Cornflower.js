import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Cornflower extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Cornflower"
            case 'jp':
                return "ひまわりとうもろこし"
            default:
                return "Cornflower"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.taint(ESSENCE.WISP);
    }

    source() {
        return ["Orchard"];
    }

}

export {Cornflower};
