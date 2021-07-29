import {Item} from "@/forge/items/Item";

class Cabadillo extends Item {


    IPRINT() {
        return "Cabadillo";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.HAUBERK()) {
            f.setStrike(f.perc125(f.getStrike()));
            f.setSlash(f.perc125(f.getSlash()));
            f.setThrust(f.perc125(f.getThrust()));
            f.setMagic(f.perc50(f.getMagic()));
        }
    }

}

export {Cabadillo};
