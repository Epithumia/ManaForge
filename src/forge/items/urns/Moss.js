import {Item} from "@/forge/items/Item";
import {IMMUNITY} from "@/forge/enums";

class Moss extends Item {
    constructor() {
        super();
    }

    value = 103

    text(language) {
        switch(language) {
            case 'classic':
                return "Moss"
            case 'jp':
                return "こけ"
            default:
                return "Moss"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        if (f.HELM()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Darkness.value);
        }
    }

    source() {
        return [];
    }

}

export {Moss};
