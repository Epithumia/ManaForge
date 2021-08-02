import {Item} from "@/forge/items/Item";

class Sweet_Moai extends Item {
    constructor() {
        super();
    }

    value = 52

    text(language) {
        switch(language) {
            case 'classic':
                return "Sweet Moai"
            case 'jp':
                return "スウィートモアイ"
            default:
                return "Sweet Moai"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        if (f.HELM()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
        } else if (f.HAT()) {
            f.setStrike(f.perc150(f.getStrike()));
            f.setSlash(f.perc150(f.getSlash()));
            f.setThrust(f.perc150(f.getThrust()));
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Sweet_Moai};
