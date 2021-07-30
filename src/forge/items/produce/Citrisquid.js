import {Item} from "@/forge/items/Item";

class Citrisquid extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Citrisquid"
            case 'jp':
                return "イカレモン"
            default:
                return "Citrisquid"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.setSharp(f.perc75(f.getSharp()));
        f.setHeavy(f.perc125(f.getHeavy()));
        f.setSlash(f.perc75(f.getSlash()));
        f.setStrike(f.perc125(f.getStrike()));
    }

    source() {
        return ["Orchard"];
    }

}

export {Citrisquid};
