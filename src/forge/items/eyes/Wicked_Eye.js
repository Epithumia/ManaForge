import {Item} from "@/forge/items/Item";

class Wicked_Eye extends Item {
    constructor() {
        super();
    }

    value = 84

    text(language) {
        switch(language) {
            case 'classic':
                return "Wicked Eye"
            case 'jp':
                return "よこしまな瞳"
            default:
                return "Wicked Eye"
        }
    }

    energy() {
        return 48;
    }

    code(f) {
        f.setSharp(f.perc125(f.getSharp()));
    }

    source() {
        return [];
    }

}

export {Wicked_Eye};
