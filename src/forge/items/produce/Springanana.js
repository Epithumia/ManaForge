import {Heavens_Scale} from "@/forge/cards/world";
import {Item} from "@/forge/items/Item";

class Springanana extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Springanana"
            case 'jp':
                return "バネバナナ"
            default:
                return "Springanana"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Heavens_Scale();
        }
    }

    source() {
        return ["Orchard"]
    }

}

export {Springanana};
