import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Spiny_Carrot extends Item {
    constructor() {
        super();
    }

    value = 53

    text(language) {
        switch(language) {
            case 'classic':
                return "Spiny Carrot"
            case 'jp':
                return "ツノガイニンジン"
            default:
                return "Spiny Carrot"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.setSharp(f.perc125(f.getSharp()));
        f.setHeavy(f.perc75(f.getHeavy()));
        f.taint(ESSENCE.UNDINE);
    }

    source() {
        return ["Orchard"];
    }

}

export {Spiny_Carrot};
