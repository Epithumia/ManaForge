import {Item} from "@/forge/items/Item";
import {Sacrificed_Nymph} from "@/forge/cards/maidens";

class Ghosts_Howl extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Ghost's Howl"
            case 'jp':
                return "絶望の叫び"
            default:
                return "Ghost's Howl"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Sacrificed_Nymph();
        }
    }

    source() {
        return [];
    }

}

export {Ghosts_Howl};
