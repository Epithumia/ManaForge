import {Item} from "@/forge/items/Item";
import {Pixie_Of_Laziness} from "@/forge/cards/pixies";

class Rust extends Item {


    IPRINT() {
        return "Rust";
    }


    ENERGY() {
        return 8;
    }


    CODE(f) {
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Laziness();
        }
    }

}

export {Rust};
