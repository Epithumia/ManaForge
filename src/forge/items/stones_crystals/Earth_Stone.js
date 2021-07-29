import {ESSENCE} from "@/forge/enums";
import {Gnome} from "@/forge/cards/elemental_spirits";
import {Item} from "@/forge/items/Item";

class Earth_Stone extends Item {

    IPRINT() {
        return "Earth Stone";
    }

    ENERGY() {
        return 24;
    }

    CODE(f) {
        f.taint(ESSENCE.GNOME);
        if (f.getEnergy() >= 8) {
            f.prehidden = new Gnome();
        }
    }

}

export {Earth_Stone};
