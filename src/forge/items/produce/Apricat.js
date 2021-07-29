import {Item} from "@/forge/items/Item";

class Apricat extends Item {


    IPRINT() {
        return "Apricat";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        f.setForce(f.perc75(f.getForce()));
        f.setTech(f.perc125(f.getTech()));
    }

}

export {Apricat};
