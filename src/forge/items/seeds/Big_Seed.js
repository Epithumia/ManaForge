import {ESSENCE} from "@/forge/enums";
import {Dryad} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Big_Seed extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Big Seed"
            case 'jp':
                return "おおきな種"
            default:
                return "Big Seed"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.taint(ESSENCE.DRYAD);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Dryad();
        }
    }

    source() {
        return ["Drop", "Treant"];
    }

}

export {Big_Seed};
