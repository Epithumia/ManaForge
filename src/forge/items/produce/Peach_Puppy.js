import {Wolf} from "@/forge/cards/other";
import {Item} from "@/forge/items/Item";

class Peach_Puppy extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Peach Puppy"
            case 'jp':
                return "ドッグピーチ"
            default:
                return "Peach Puppy"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        if (f.getEnergy() >= 8) {
            f.prehidden = new Wolf();
        }
        f.setSharp(f.perc125(f.getSharp()));
        f.setHeavy(f.perc75(f.getHeavy()));
    }

    source() {
        return ["Orchard"];
    }

}

export {Peach_Puppy};
