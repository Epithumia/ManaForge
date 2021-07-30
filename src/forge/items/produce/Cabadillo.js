import {Item} from "@/forge/items/Item";

class Cabadillo extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Cabadillo"
            case 'jp':
                return "アルマジロキャベツ"
            default:
                return "Cabadillo"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        if (f.HAUBERK()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
            f.setMagic(f.perc50(f.getMagic()));
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Cabadillo};
