import {Item} from "@/forge/items/Item";

class Sweet_Moai extends Item {


    IPRINT() {
        return "Sweet Moai";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
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

}

export {Sweet_Moai};
