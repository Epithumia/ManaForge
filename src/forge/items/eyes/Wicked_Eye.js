import {Item} from "@/forge/items/Item";

class Wicked_Eye extends Item {


    IPRINT() {
        return "Wicked Eye";
    }


    ENERGY() {
        return 48;
    }


    CODE(f) {
        f.setSharp(f.perc125(f.getSharp()));
    }

}

export {Wicked_Eye};
