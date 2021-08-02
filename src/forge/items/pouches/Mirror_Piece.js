import {Item} from "@/forge/items/Item";
import {Mirrored_World} from "@/forge/cards/world";

class Mirror_Piece extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Mirror Piece"
            case 'jp':
                return "鏡の破片"
            default:
                return "Mirror Piece"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.ESSTOTAL() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Mirrored_World();
        }
    }

    source() {
        return [];
    }
}

export {Mirror_Piece};
