import {Item} from "@/forge/items/Item";
import {Pixie_Of_Laziness} from "@/forge/cards/pixies";

class Rust extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Rust"
            case 'jp':
                return "さびのこな"
            default:
                return "Rust"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Laziness();
        }
    }

    source() {
        return [];
    }
}

export {Rust};
