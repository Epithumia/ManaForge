import {Ruler_Of_The_Sky} from "@/forge/cards/heaven_gods";
import {Item} from "@/forge/items/Item";

class Spade_Basil extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Spade Basil"
            case 'jp':
                return "スペードバジル"
            default:
                return "Spade Basil"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        f.setSharp(f.perc125(f.getSharp()));
        if (f.getWi() >= 3 && f.ESSTOTAL() >= 6 && f.getEnergy() >= 8) {
            f.prehidden = new Ruler_Of_The_Sky();
        }
    }

    source() {
        return ["Store", "Orchard"];
    }

}

export {Spade_Basil};
