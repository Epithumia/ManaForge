import {Item} from "@/forge/items/Item";

class Gold_Clover extends Item {


    IPRINT() {
        return "Gold Clover";
    }


    ENERGY() {
        return 64;
    }


    CODE(f) {
        f.setHeavy(f.perc125(f.getHeavy()));
    }

}

export {Gold_Clover};
