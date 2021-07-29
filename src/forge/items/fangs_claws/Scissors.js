import {Item} from "@/forge/items/Item";

class Scissors extends Item {


    IPRINT() {
        return "Scissors";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        f.setForce(f.perc150(f.getForce()));
        f.setTech(f.perc50(f.getTech()));
    }

}

export {Scissors};
