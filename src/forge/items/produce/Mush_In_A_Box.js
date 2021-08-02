import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Mush_In_A_Box extends Item {
    constructor() {
        super();
    }

    value = 68

    text(language) {
        switch(language) {
            case 'classic':
                return "Mush-In-A-Box"
            case 'jp':
                return "ドッキリマッシュ"
            default:
                return "Mush-In-A-Box"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.taint(ESSENCE.SHADE);
    }

    source() {
        return ["Store", "Orchard"];
    }

}

export {Mush_In_A_Box};
