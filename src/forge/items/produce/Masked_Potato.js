import {Item} from "@/forge/items/Item";

class Masked_Potato extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Masked Potato"
            case 'jp':
                return "マスクイモ"
            default:
                return "Masked Potato"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.setSharp(f.perc75(f.getSharp()));
        f.setHeavy(f.perc125(f.getHeavy()));
    }

    source() {
        return ["OrchardF"]
    }

}

export {Masked_Potato};
