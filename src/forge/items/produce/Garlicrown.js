import {King} from "@/forge/cards/other";
import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Garlicrown extends Item {
    constructor() {
        super();
    }

    value = 50

    text(language) {
        switch(language) {
            case 'classic':
                return "Garlicrown"
            case 'jp':
                return "クラウンガーリック"
            default:
                return "Garlicrown"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new King();
        }
        f.unsticky();
        f.taint(ESSENCE.AURA);
    }

    source() {
        return ["Orchard"]
    }

}

export {Garlicrown};
