import {Item} from "@/forge/items/Item";

class Apricat extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Apricat"
            case 'jp':
                return "キャットアプリコット"
            default:
                return "Apricat"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.setForce(f.perc75(f.getForce()));
        f.setTech(f.perc125(f.getTech()));
    }

    source() {
        return ["Orchard"];
    }

}

export {Apricat};
