import {IMMUNITY} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Rhinoloupe extends Item {
    constructor() {
        super();
    }

    value = 48

    text(language) {
        switch(language) {
            case 'classic':
                return "Rhinoloupe"
            case 'jp':
                return "サイメロン"
            default:
                return "Rhinoloupe"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.setSharp(f.perc125(f.getSharp()));
        f.setImmunity(IMMUNITY.Poison.value);
    }

    source() {
        return ["Orchard"];
    }

}

export {Rhinoloupe};
