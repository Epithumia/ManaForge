import {Yggdrasil} from "@/forge/cards/world";
import {ESSENCE} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Spiny_Seed extends Item {

    IPRINT() {
        return "Spiny Seed";
    }

    ENERGY() {
        return 48;
    }

    CODE(f) {
        if (f.getDr() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Yggdrasil();
        }
        f.taint(ESSENCE.DRYAD);
    }

}

export {Spiny_Seed};
