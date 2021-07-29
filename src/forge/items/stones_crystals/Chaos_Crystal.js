import {Ancient_Moon} from "@/forge/cards/world";
import {Item} from "@/forge/items/Item";

class Chaos_Crystal extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Chaos Crystal"
            case 'jp':
                return "[Chaos Crystal]"
            default:
                return "Chaos Crystal"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.getEnergy() >= 16) {
            f.prehidden = new Ancient_Moon();
        }
    }

    source() {
        return ["Store"];
    }

}

export {Chaos_Crystal};
