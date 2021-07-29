import {Item} from "@/forge/items/Item";

class Citrisquid extends Item {


    IPRINT() {
        return "Citrisquid";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.setSharp(f.perc75(f.getSharp()));
        f.setHeavy(f.perc125(f.getHeavy()));
        f.setSlash(f.perc75(f.getSlash()));
        f.setStrike(f.perc125(f.getStrike()));
    }

}

export {Citrisquid};
