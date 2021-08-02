import {Metropolis} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Dialaurel extends Item {
    constructor() {
        super();
    }

    value = 66

    text(language) {
        switch(language) {
            case 'classic':
                return "Dialaurel"
            case 'jp':
                return "ダイヤローレル"
            default:
                return "Dialaurel"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        if (0 === f.getSa() && f.getSh() > 0 && f.getEnergy() >= 8) {
        f.prehidden = new Metropolis();
    }

    }

    source() {
        return ["Store", "Orchard"];
    }

}

export {Dialaurel};
