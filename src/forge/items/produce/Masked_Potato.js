import {Item} from "@/forge/items/Item";

class Masked_Potato extends Item {


    IPRINT() {
        return "Masked Potato";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setSharp(f.perc75(f.getSharp()));
        f.setHeavy(f.perc125(f.getHeavy()));
    }

}

export {Masked_Potato};
